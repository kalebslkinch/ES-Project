import { NextApiRequest, NextApiResponse } from 'next'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		try {
			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				// TODO: replace line_items with your products here
				line_items: [
					{
						price_data: {
							currency: 'gbp',
							product_data: {
								name: 'Family Order',
								images: [`exoticsnaxx-kalebslkinch.vercel.app/public/Exotic_snax.jpg`]
							},
							unit_amount: 6500
						},
						quantity: 1
					}
				],
				mode: 'payment',
				success_url: `${req.headers.origin}/snackbox-order?success=true&session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/snackbox-order?canceled=true`
			})

			res.redirect(303, session.url)
		} catch (err: any) {
			res.status(500).json({ statusCode: 500, message: err.message })
		}
	} else {
		res.setHeader('Allow', 'POST')
		res.status(405).end('Method Not Allowed')
	}
}
