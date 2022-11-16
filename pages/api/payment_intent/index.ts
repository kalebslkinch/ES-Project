import { NextApiRequest, NextApiResponse } from 'next'
import { AnyNode } from 'postcss'
import { execArgv } from 'process'
import prisma from '../../../lib/prisma'

// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { body } = req

	const productData = await prisma.products.findMany()

	const products = JSON.parse(body.products)

	let filteredWithCorrectQuantity: any[] = []
	let actualAmounts: number[] = []

	const IDs = products.map((product: { id: string }) => product.id)
	const filteredProducts = productData.filter((product: { id: string }) => IDs.includes(product.id))

	for (let i = 0; i < filteredProducts.length; i++) {
		filteredWithCorrectQuantity.push({
			...filteredProducts[i],
			quantity: products[i].quantity
		})
	}

	filteredWithCorrectQuantity.forEach((each: any) => {
		actualAmounts.push(each.price * each.quantity)
	})

	// Add all the amount in actualAmounts array
	const totalAmount = actualAmounts.reduce((a: number, b: number) => a + b, 0)

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount * 100,
		currency: 'gbp',
		automatic_payment_methods: {
			enabled: true
		}
	})

	res.send({
		clientSecret: paymentIntent.client_secret
	})
}
