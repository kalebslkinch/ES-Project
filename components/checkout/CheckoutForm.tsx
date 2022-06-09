import HowToTest from '../HowToTest';
import { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import cookie from 'js-cookie';
import CryptoJS from 'crypto-js';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../graphql/mutations/addCustomersOrders';
import { date, time } from '../../lib/dateandtime';
import Loading from '../Loading';
import { CheckoutForm } from '../../utils/types/checkoutform';

const CheckoutForm = () => {
  const [addCustomersOrders, { data: customerData }] = useMutation(ADD_ORDER);
  const router = useRouter();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [data, setData] = useState<CheckoutForm>({
    customerID: '',
    customerInfo: {
      firstName: '',
      surName: '',
      address: '',
      number: '',
      postCode: '',
      customerEmail: '',
    },
    quantityAmount: '',
    totalAmount: 0,
    billingDetails: {
      given_name: '',
      surname: '',
      email_address: '',
      payer_id: '',
    },
    productOrderInfo: '',
  });
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    // Decrypt
    const getData = JSON.parse(cookie.get('orderDetails')).totalAmount;
    let bytesTotalAmount = CryptoJS.AES.decrypt(
      getData,
      `${process.env.SECRET_KEY}`
    );
    // Decrypt
    let totalAmount = JSON.parse(bytesTotalAmount.toString(CryptoJS.enc.Utf8));

    const encryptedData = JSON.parse(cookie.get('orderDetails')).encryptedData;
    let bytesencryptedData = CryptoJS.AES.decrypt(
      encryptedData,
      `${process.env.SECRET_KEY}`
    );
    // Decrypt
    let decryptedencryptedData = JSON.parse(
      bytesencryptedData.toString(CryptoJS.enc.Utf8)
    );

    setData({ ...decryptedencryptedData });

    window
      .fetch('/api/payment_intent/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: totalAmount }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#white',
          fontSize: '16px',
        },
        height: 30,
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const {
    customerID,
    customerInfo,
    quantityAmount,
    totalAmount,

    billingDetails,
    productOrderInfo,
  } = data;

  let encryptedPaypalInfo = CryptoJS.AES.encrypt(
    JSON.stringify(billingDetails),
    `${process.env.SECRET_KEY}`
  ).toString();

  let encryptedCustomerInfo = CryptoJS.AES.encrypt(
    JSON.stringify(customerInfo),
    `${process.env.SECRET_KEY}`
  ).toString();

  const handlePageChange = () => {
    router.replace('/orderCompleted');
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

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

      setTimeout(handlePageChange, 1000);
    }
  };
  const { firstName, surName, address } = data.customerInfo;
  return (
    <div className='max-w-screen w-full text-white'>
      <span className='mx-auto mt-2 flex w-2/5 text-lg text-blue-600'>
        How to test:
      </span>

      <p className='mx-auto w-2/5 text-black'>
        <HowToTest title='Use card number:' information='4242 4242 4242 4242' />

        <HowToTest title='Use date:' information='12/34' />

        <HowToTest title='Use three-digit CVC:' information='222' />

        <HowToTest title='Use Zip Code:' information='90210' />
      </p>

      <form
        id='payment-form'
        className='mx-auto mt-10 w-full max-w-3xl rounded-lg bg-gray-800 py-8'
        onSubmit={handleSubmit}
      >
        <div className='w-3/5  '>
          <h1 className='  pb-1 text-center text-5xl'>Card Payment</h1>
          <p className='pb-3  text-right text-2xl'>
            via{' '}
            <a
              className='mr-12 italic text-blue-700'
              href='https://stripe.com/'
            >
              Stripe
            </a>
          </p>
        </div>
        <div className='mx-auto w-full max-w-xl border border-black bg-gray-800'>
          <CardElement
            id='card-element'
            options={cardStyle}
            onChange={handleChange}
          />
        </div>

        <h4 className='pt-3  text-center text-xl '>
          Customer: {firstName} {surName}
        </h4>
        <h4 className='pt-1 pb-3 text-center text-xl  '>
          Delivery Address: {address}
        </h4>
        <h4 className=' pt-1 pb-1 text-center text-xl '>
          No. of Items: {quantityAmount}
        </h4>
        <h4 className=' pt-1 pb-1 text-center text-xl '>
          Total Amount: £{totalAmount.toFixed(2)}
        </h4>

        <div className='max-w-screen flex w-full flex-row justify-center pt-4'>
          {succeeded ? (
            <Loading />
          ) : (
            <button id='submit' className='rounded-lg border py-2 px-2'>
              <span id='button-text'>
                {processing ? (
                  <div className='spinner' id='spinner'></div>
                ) : (
                  <h3 className='text-xl text-white'>Pay now</h3>
                )}
              </span>
            </button>
          )}
        </div>

        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p
          className={
            succeeded
              ? 'text-center text-xl text-white'
              : 'result-message hidden'
          }
        >
          Payment succeeded
        </p>
      </form>
    </div>
  );
};

export default CheckoutForm;
