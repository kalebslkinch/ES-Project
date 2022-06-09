import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
// This is your real test secret API key.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27"
});

const calculateOrderAmount = (amount) => {
  return parseInt((amount * 100).toString(), 10);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(amount),
    currency: "gbp"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
}
