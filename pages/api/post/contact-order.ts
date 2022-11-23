import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { name, email, budgetAmount, prefferedDate, message, createdAt } = req.body

	if (!name || !email || !message || !createdAt) {
		return res.status(400).json({ message: 'Missing fields' })
	} else {
		await prisma.contactOrder.create({
			data: {
				name,
				email,
				budgetAmount,
				prefferedDate,
				message,
				createdAt
			}
		})
		return res.status(200).json({ message: 'Message sent' })
	}
}
