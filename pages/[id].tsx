// import React from 'react'
// import client from '../lib/apolloClient'
// import GET_PRODUCTS_AVAILABLE from '../graphql/querys/getProductsAvailable'

// import cookie from 'js-cookie'
// import { useRouter } from 'next/router'
// import GET_PRODUCTS_BY_ID from '../graphql/querys/getProductsbyID'
// import Cross from '../components/svg/Cross'
// import Image from 'next/image'
// import { FSCol } from '../components/EasyComponents/FScreen'
// import { Col, Row } from '../components/EasyComponents/Flex'
// import { NextPage } from 'next'

// const Title: NextPage<{
// 	getData: {
// 		_id: string
// 		title: string
// 		description: string
// 		image: string
// 		price: number | string
// 	}
// }> = ({ getData }) => {
// 	const { _id, image, title, description, price } = getData
// 	const itemData: {
// 		id: string
// 		title: string
// 		description: string
// 		image: string
// 		price: number | string
// 		quantity: number
// 	} = { id: _id, title, description, image, price, quantity: 1 }

// 	const router = useRouter()

// 	const refreshData = (): void => {
// 		router.replace(router.asPath)
// 	}
// 	// Empty Array
// 	const handleCart = (): void => {
// 		const cart = 'cart'
// 		if (cookie.get(cart) === undefined) {
// 			cookie.set(cart, [itemData])
// 		} else {
// 			const storedData = JSON.parse(cookie.get(cart))

// 			const titles: string[] = storedData.map(data => data.title)
// 			if (titles.includes(title)) {
// 				alert('This has already been chosen')
// 			} else {
// 				const addData: {}[] = [...storedData, itemData]
// 				cookie.set(cart, JSON.stringify(addData))
// 			}
// 		}

// 		refreshData()
// 	}

// 	const handleGoBack = (): void => {
// 		router.back()
// 	}

// 	return (
// 		<FSCol className="animate-productCardFadeIn  items-center overflow-hidden bg-white  lg:p-10 ">
// 			<div className="mx-auto mt-20 h-full w-full max-w-6xl rounded-xl bg-white p-10 text-gray-800 shadow-xl md:text-left ">
// 				<Row className="justify-end">
// 					{/* Close Button */}
// 					<button onClick={handleGoBack} className="focus:outline-none">
// 						<Cross className="h-8 w-8" />
// 					</button>
// 				</Row>
// 				<Col className="h-full sm:flex-row">
// 					<div className="relative mb-10 h-64 sm:w-1/2 md:mb-0">
// 						{/* Image */}
// 						<Image layout="fill" objectFit="cover" src={image} alt={title} />
// 					</div>

// 					{/* Product Information Wrapper */}
// 					<Col className="w-full sm:ml-5 md:ml-8 md:w-1/2">
// 						<div className="mb-6">
// 							{/* Title */}
// 							<h3 className="mb-5 text-4xl font-bold uppercase">{title}</h3>

// 							{/* Description */}
// 							<p className="text-lg">{description}</p>
// 						</div>
// 						<div>
// 							<div className="text-gray-900 sm:mr-5">
// 								{/* Price */}
// 								{price >= 1 ? (
// 									<>
// 										<span className="text-4xl font-bold">£ {parseFloat(price as string).toFixed(2)}</span>
// 									</>
// 								) : (
// 									<>
// 										<span className="text-5xl font-bold">
// 											{parseFloat(price as string)
// 												.toFixed(2)
// 												.slice(-2)}
// 											p
// 										</span>
// 									</>
// 								)}
// 							</div>
// 							<div className="flex pt-4 sm:pt-6">
// 								{/* Add to bag button */}
// 								<button
// 									onClick={handleCart}
// 									className="duration-400 ml-auto transform rounded-full bg-gray-700 px-10 py-2 font-semibold text-white transition  delay-100 hover:bg-gray-900  focus:outline-none sm:ml-0 md:mt-4"
// 								>
// 									Add to bag
// 								</button>
// 							</div>
// 						</div>
// 					</Col>
// 				</Col>
// 			</div>
// 		</FSCol>
// 	)
// }

// export default Title

// export async function getStaticPaths() {
// 	const { data } = await client.query({ query: GET_PRODUCTS_AVAILABLE })
// 	const allProducts = data.allProductsAvailable.data

// 	return {
// 		paths: allProducts.map(data => ({ params: { id: data._id } })),
// 		fallback: 'blocking'
// 	}
// }

// export async function getStaticProps({ params }) {
// 	const { data } = await client.query({
// 		query: GET_PRODUCTS_BY_ID,
// 		variables: { id: params.id }
// 	})

// 	const getData = data.findProductsAvailableByID
// 	return {
// 		props: {
// 			getData
// 		},
// 		revalidate: 60
// 	}
// }

const id = () => {
	return <></>
}

export default id
