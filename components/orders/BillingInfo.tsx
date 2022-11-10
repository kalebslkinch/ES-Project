import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import { PayPalButtons } from '@paypal/react-paypal-js';
import CryptoJS from 'crypto-js';

import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../graphql/mutations/addCustomersOrders';
import { date, time } from '../../lib/dateandtime';
import Loading from '../Loading';
import BillingInformation from './BillingInformation';

interface BillingInfoProps {
  totalAmount: number;
  quantityAmount: number;
  action: string;
}
const BillingInfo: FC<BillingInfoProps> = ({
  totalAmount,
  quantityAmount,
  action,
}) => {
  const [addCustomersOrders, { data }] = useMutation(ADD_ORDER);

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState('');
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    given_name: '',
    surname: '',
    email_address: '',
    payer_id: '',
  });
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    surName: '',
    address: '',
    number: '',
    postCode: '',
    customerEmail: '',
  });

  // User
  
  // Temporary User 
  const user = {id: 0}
  // Router
  const router = useRouter();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    cookie.set('done', '0');
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setOrderCompleted(true);
      // Decrypt
      const encryptedData = JSON.parse(
        cookie.get('orderDetails')
      ).encryptedData;
      let bytesOrderDoneData = CryptoJS.AES.decrypt(
        encryptedData,
        `${process.env.SECRET_KEY}`
      );
      let orderDone = JSON.parse(
        bytesOrderDoneData.toString(CryptoJS.enc.Utf8)
      );

      const {
        customerID,
        customerInfo,
        quantityAmount,
        totalAmount,
        billingDetails,
        productOrderInfo,
      } = orderDone;

      // Encrypt Data
      let encryptedPaypalInfo = CryptoJS.AES.encrypt(
        JSON.stringify(billingDetails),
        `${process.env.SECRET_KEY}`
      ).toString();

      let encryptedCustomerInfo = CryptoJS.AES.encrypt(
        JSON.stringify(customerInfo),
        `${process.env.SECRET_KEY}`
      ).toString();

      // Data passed into the cookie
      addCustomersOrders({
        variables: {
          data: {
            customerID: customerID,
            customerInfo: encryptedPaypalInfo,
            paypalInfo: encryptedCustomerInfo,
            shippingInformation: '',
            productOrderInfo,
            quantity: quantityAmount,
            cost: totalAmount.toFixed(2),
            time: time,
            date: date,
            completed: false,
          },
        },
      });
      setTimeout(() => router.replace('/orderCompleted'), 5000);
    }
    if (query.get('canceled')) {
      alert(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);
  // Router

  // Paypal Order
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
  // Handle Checkout
  const handleCheckout = () => {
    const data = {
      customerID: user ? user.id : '',
      customerInfo,
      quantityAmount,
      totalAmount,
      payer_id: '',
      email_address: '',
      billingDetails,
      productOrderInfo: 'snackbox',
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
  };
  // Pass Data to DB & Cookies and routing to Order completed page
  if (succeeded) {
    const data = {
      customerID: user ? user.id : '',
      customerInfo,
      quantityAmount,
      totalAmount,
      payer_id: '',
      email_address: '',
      billingDetails,
      productOrderInfo: 'snackbox',
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
            productOrderInfo: 'snackbox',
            quantity: quantityAmount,
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

  if (orderCompleted) {
    return (
      <div className='flex w-screen justify-center'>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className='my-auto flex w-screen justify-center'>
        <form
          action={action}
          method='POST'
          className='mx-4 w-full sm:max-w-md  md:py-4 lg:max-w-lg'
        >
          <BillingInformation
            setCustomerInfo={setCustomerInfo}
            customerInfo={customerInfo}
            totalAmount={totalAmount}
          />
          <div className='mx-auto flex w-full flex-col justify-center'>
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
              onClick={handleCheckout}
              className='rounded-full border bg-gray-800 py-2 text-xl text-white focus:outline-none '
            >
              Pay By Card
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default BillingInfo;
