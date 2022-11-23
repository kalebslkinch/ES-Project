import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { name, email, message } = req.body

	if (!name || !email || !message) {
		return res.status(400).json({ message: 'Missing fields' })
	} else {
		await prisma.contact.create({
			data: req.body
		})
		return res.status(200).json({ message: 'Message sent' })
	}
}
