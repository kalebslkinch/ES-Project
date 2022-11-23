import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const products = await prisma.products.findMany()
	res.json(products)
}

export default handler
