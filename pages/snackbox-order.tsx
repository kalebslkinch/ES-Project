import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import BillingInfo from '../components/orders/BillingInfo';
import cookie from 'js-cookie';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PAYPAL_CLIENT_ID } from '../utils/constants';
import { FSCol } from '../components/EasyComponents/FScreen';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const SnackBoxOrder = () => {
  const [type, setType] = useState('');
  useEffect(() => {
    // Get cookie data
    const cookieData = cookie.get('bitype');
    setType(cookieData);
  }, []);

  return (
    <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID.clientId }}>
      <FSCol className='h-[92vh]'>
        <BillingInfo
          totalAmount={type === 'single' ? 25 : 65}
          quantityAmount={type === 'single' ? 1 : 3}
          action={
            type === 'single'
              ? '/api/checkout_sessions1'
              : '/api/checkout_sessions2'
          }
        />
      </FSCol>
    </PayPalScriptProvider>
  );
};

export default SnackBoxOrder;
