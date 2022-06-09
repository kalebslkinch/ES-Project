import BillingInformation from '../components/orders/BillingInformation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import CryptoJS from 'crypto-js';
import GET_PRODUCTS_AVAILABLE from '../graphql/querys/getProductsAvailable';
import { useMutation, useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import { ADD_ORDER } from '../graphql/mutations/addCustomersOrders';
import { date, time } from '../lib/dateandtime';
import { PAYPAL_CLIENT_ID } from '../utils/constants';
import { FSCol } from '../components/EasyComponents/FScreen';
import { CustomerInfo } from '../utils/types/customerinfo';
import { BillingDetails } from '../utils/types/billingdetails';
import { CustomerOrder } from '../utils/types/customerorder';
import { Col } from '../components/EasyComponents/Flex';

const Checkout2 = ({ user }) => {
  const {
    data: getProductsAvaialable,
    loading: loadingProductsAvaialable,
    error,
  } = useQuery(GET_PRODUCTS_AVAILABLE);
  const [addCustomersOrders, { data }] = useMutation(ADD_ORDER);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    cookie.set('done', '0');
  }, []);

  const [succeeded, setSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState('');
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    given_name: '',
    surname: '',
    email_address: '',
    payer_id: '',
  });
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    surName: '',
    address: '',
    number: '',
    postCode: '',
    customerEmail: '',
  });

  // Router
  const router = useRouter();

  // Load Query Data
  if (error) return alert(error.message);
  if (loadingProductsAvaialable) {
    return <Loading />;
  }

  const cart = 'cart';
  if (cookie.get(cart) === undefined) {
    return <></>;
  }

  // Handle Cookie Data
  const getCart = JSON.parse(cookie.get('cart'));
  const sortedCookies = getCart.sort((a, b) => {
    return a.id - b.id;
  });

  const quantity = getCart.map((data) => data.quantity);
  const IDs = sortedCookies.map((data) => data.id).sort();

  const matchingIDs = getProductsAvaialable.allProductsAvailable.data.filter(
    (data) => IDs.includes(data._id)
  );

  const productPrices = matchingIDs.map((data) => parseFloat(data.price));

  let totalAmountArray = [];

  for (let i = 0; i < productPrices.length; i++) {
    totalAmountArray.push(
      parseFloat((productPrices[i] * quantity[i]).toFixed(2))
    );
  }

  const totalQuantity = quantity.reduce((a, b) => {
    return a + b;
  });

  const totalAmount = totalAmountArray.reduce((a, b) => {
    return a + b;
  });

  // Handle Checkout
  const handleCheckout = (e) => {
    // Prevent Refresh
    e.preventDefault();

    // Get cookie Data
    const productOrderInfo = cookie.get('cart');

    // Data passed into the cookie
    const data: CustomerOrder = {
      customerID: user ? user.id : '',
      customerInfo,
      quantityAmount: totalQuantity,
      totalAmount,
      payer_id: '',
      email_address: '',
      billingDetails,
      productOrderInfo,
    };

    // Data Encryption
    let encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      `${process.env.SECRET_KEY}`
    ).toString();
    let encryptedTotalAmount = CryptoJS.AES.encrypt(
      JSON.stringify(totalAmount.toFixed(2)),
      `${process.env.SECRET_KEY}`
    ).toString();

    // Set Cookie with encrypted Data
    cookie.set(
      'orderDetails',
      JSON.stringify({
        encryptedData: encryptedData,
        totalAmount: encryptedTotalAmount,
      })
    );
    router.replace('/checkout');
  };
  if (getCart.length > 0) {
    // creates a paypal order
    const createOrder = (data, actions) => {
      return actions.order
        .create({
          purchase_units: [
            {
              amount: {
                // charged per order
                value: totalAmount.toFixed(2),
              },
            },
          ],
          // remove the applicaiton_context object if you need your users to add a shipping address
          application_context: {
            shipping_preference: 'NO_SHIPPING',
          },
        })
        .then((orderID) => {
          setOrderID(orderID);
          return orderID;
        });
    };

    // handles when a payment is confirmed for paypal
    const onApprove = (data, actions) => {
      return actions.order
        .capture()
        .then(function (details) {
          const { payer } = details;
          setBillingDetails(payer);
          setSucceeded(true);
        })
        .catch((err) => setPaypalErrorMessage('Something went wrong.'));
    };

    //   Paypal Payment Successful
    if (succeeded) {
      // Get cookie Data
      const productOrderInfo = cookie.get('cart');

      const data: CustomerOrder = {
        customerID: user ? user.id : '',
        customerInfo,
        quantityAmount: totalQuantity,
        totalAmount,
        payer_id: '',
        email_address: '',
        billingDetails,
        productOrderInfo,
      };

      // Data Encryption
      let encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        `${process.env.SECRET_KEY}`
      ).toString();
      let encryptedTotalAmount = CryptoJS.AES.encrypt(
        JSON.stringify(totalAmount.toFixed(2)),
        `${process.env.SECRET_KEY}`
      ).toString();

      // Set Cookie with encrypted Data
      cookie.set(
        'orderDetails',
        JSON.stringify({
          encryptedData: encryptedData,
          totalAmount: encryptedTotalAmount,
        })
      );

      // Encrypt Data
      let encryptedPaypalInfo = CryptoJS.AES.encrypt(
        JSON.stringify(billingDetails),
        `${process.env.SECRET_KEY}`
      ).toString();

      let encryptedCustomerInfo = CryptoJS.AES.encrypt(
        JSON.stringify(customerInfo),
        `${process.env.SECRET_KEY}`
      ).toString();

      // Mutate Data

      // Stops multiple mutations happen
      if (parseInt(cookie.get('done'), 10) <= 0) {
        let add = parseInt(cookie.get('done'), 10);
        addCustomersOrders({
          variables: {
            data: {
              customerID: user ? user.id : '',
              customerInfo: encryptedPaypalInfo,
              paypalInfo: encryptedCustomerInfo,
              shippingInformation: '',
              productOrderInfo,
              quantity: totalQuantity,
              cost: totalAmount.toFixed(2),
              time: time,
              date: date,
              completed: false,
            },
          },
        });
        add += 1;
        cookie.set('done', JSON.stringify(add));
      } else if (parseInt(cookie.get('done'), 10) === 5) {
        // Mutates Order Information

        let add = parseInt(cookie.get('done'), 10);
        add += 1;
        cookie.set('done', JSON.stringify(add));
      } else {
      }

      setTimeout(() => router.replace('/orderCompleted'), 2000);
    }
    return (
      <PayPalScriptProvider
        options={{ 'client-id': PAYPAL_CLIENT_ID.clientId }}
      >
        <FSCol className='h-[90vh]'>
          <div className='my-auto flex w-screen justify-center'>
            <form
              onSubmit={handleCheckout}
              className='mx-2 w-full sm:mx-4 sm:max-w-md md:py-4 lg:max-w-lg'
            >
              <BillingInformation
                setCustomerInfo={setCustomerInfo}
                customerInfo={customerInfo}
                totalAmount={totalAmount}
              />
              <div className='mx-auto mt-2 flex w-full flex-col justify-center'>
                <PayPalButtons
                  style={{
                    color: 'blue',
                    shape: 'pill',
                    label: 'pay',
                    tagline: false,
                    layout: 'horizontal',
                  }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
                <button
                  type='submit'
                  className='rounded-full border bg-gray-800 py-2 text-xl text-white focus:outline-none '
                >
                  Pay By Card
                </button>
              </div>
            </form>
          </div>
        </FSCol>
      </PayPalScriptProvider>
    );
  } else {
    router.back();
    return <></>;
  }
};

export default Checkout2;
