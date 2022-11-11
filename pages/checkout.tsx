import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { NextPage } from 'next';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkout: NextPage = () => {
  return (
    <div className='App'>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
