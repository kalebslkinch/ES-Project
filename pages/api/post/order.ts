import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const {
		customerID,
		products,
		deliveryInformation,
		totalAmount,
		totalQuantity,
		paymentMethod
	}: {
		customerID: string
		products: string
		deliveryInformation: string
		totalAmount: number
		totalQuantity: number
		paymentMethod: string
	} = req.body

	const parsedProducts = JSON.parse(products)

	const sortedCookies = parsedProducts.sort((a: any, b: any) => {
		return a.id - b.id
	})

	const quantity = parsedProducts.map((data: any) => data.quantity)
	const IDs = sortedCookies.map((data: any) => data.id).sort()

	const productData = await prisma.products.findMany()

	const matchingIDs = productData.filter((data: any) => IDs.includes(data.id))

	const productPrices: number[] = matchingIDs.map((data: any) => parseFloat(data.price))

	let totalAmountArray: any = []

	for (let i = 0; i < productPrices.length; i++) {
		totalAmountArray.push(parseFloat((productPrices[i] * quantity[i]).toFixed(2)))
	}

	const actualTotalQuantity = quantity.reduce((a: number, b: number) => {
		return a + b
	})

	const actualTotalAmount = totalAmountArray.reduce((a: number, b: number) => {
		return a + b
	})

	// currentdate as string
	const date = new Date()
	const datetime =
		date.getDate() +
		'/' +
		(date.getMonth() + 1) +
		'/' +
		date.getFullYear() +
		' ' +
		date.getHours() +
		':' +
		date.getMinutes() +
		':' +
		date.getSeconds()

	await prisma.orders.create({
		data: {
			customerID: customerID,
			products: products,
			deliveryInformation: deliveryInformation,
			totalAmount: actualTotalAmount,
			totalQuantity: actualTotalQuantity,
			createdAt: datetime,
			paymentMethod: paymentMethod
		}
	})

	res.status(200).json({ message: 'Order placed successfully' })
}
