import React from 'react'
import Products from '../components/products/Products'
import { FSCol } from '../components/EasyComponents/FScreen'
import prisma from '../lib/prisma'
import { NextPage } from 'next'

const Shopping: NextPage<{
	products: {
		id: string
		title: string
		description: string
		image: string
		price: number | string
	}[]
}> = ({ products }) => {
	return (
		<FSCol className="bg-[#f7f7f5]">
			{/* Title */}
			<h1 className="mt-8 flex  justify-center py-4 text-6xl font-medium text-gray-800 sm:text-5xl">Products</h1>
			{/* Products */}
			<FSCol className="mx-auto mt-5 gap-x-3 px-6 sm:grid sm:w-11/12 sm:grid-cols-2 md:grid-cols-3 lg:w-[95%] lg:grid-cols-4 xl:max-w-[1200px] xl:px-0">
				{products.map(data => (
					<Products
						title={data.title}
						description={data.description}
						image={data.image}
						price={data.price as string}
						id={data.id}
					/>
				))}
			</FSCol>
		</FSCol>
	)
}

export default Shopping

export const getStaticProps = async () => {
	const products = await prisma.products.findMany()
	return {
		props: {
			products
		}
	}
}
