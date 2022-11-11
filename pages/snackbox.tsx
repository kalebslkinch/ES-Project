import dynamic from 'next/dynamic'
import { loadStripe } from '@stripe/stripe-js'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Col, Row } from '../components/EasyComponents/Flex'
import Check from '../components/svg/Check'
import { NextPage } from 'next'

const DynamicContactModal = dynamic(() => import('../components/modals/ContactModal'))

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const SnackBox: NextPage = () => {
	const router = useRouter()

	const [openModal, setOpenModal] = useState<boolean>(false)

	// Lists
	const familyList: string[] = ['3 Snack Boxes', 'Free Shipping']
	const singleList: string[] = ['1 Snack Boxes', 'Free Shipping']
	const corporateList: string[] = ['Large Orders', 'Free Shipping', 'Bulk Order Prices']

	// Event handler
	const handleCheckout = (type: string): void => {
		const biType: string = 'bitype'
		const single: string = 'single'
		const family: string = 'family'
		if (type === single) {
			cookie.set(biType, single)
		}

		if (type === family) {
			cookie.set(biType, family)
		}
		router.replace('/snackbox-order')
		// setTimeout(() => , 5000);
	}

	const handleModal = (): void => {
		setOpenModal(!openModal)
	}

	return (
		<>
			<div className="min-w-screen  animate-fadein bg-white px-5 py-1">
				<div className="mx-auto mt-8 mb-10 w-full bg-white px-5 py-8 text-gray-800">
					<div className="mx-auto max-w-xl text-center">
						{/* Title */}
						<h1 className="mb-5 text-5xl font-medium">Snack Boxes</h1>

						{/* Description */}
						<h3 className="mb-10 text-xl font-medium">Pick from a range of different options for our Snack Boxes</h3>
					</div>

					{/* Single Order  */}
					<div className="mx-auto max-w-4xl lg:flex">
						<div className="mx-auto mb-3 w-full rounded-xl border bg-white px-8 py-8 shadow-2xl lg:my-6 lg:flex lg:w-1/3 lg:max-w-none lg:flex-col lg:px-10 lg:py-10">
							<div className="w-full flex-grow">
								<h2 className="mb-4 text-center text-xl font-bold uppercase">Single Order</h2>
								<h3 className="mt-2 mb-5 text-center text-3xl font-bold">£25/order</h3>
								<ul className="mb-8 px-5 text-sm">
									{singleList.map(data => (
										<li className="text-lg leading-tight">
											<Row>
												<Check className="my-auto h-6 w-6 text-black" /> {data}
											</Row>
										</li>
									))}
								</ul>
							</div>
							<div className="w-full">
								<button
									onClick={() => handleCheckout('single')}
									className="delay-400 w-full transform rounded-lg bg-gray-800 px-10 py-2 font-bold text-white transition-colors duration-200 hover:bg-gray-900 focus:outline-none"
								>
									Start Order
								</button>
							</div>
						</div>

						{/* Family Order */}
						<div className="mx-auto mb-3 w-full rounded-lg border bg-white px-8 py-8 shadow-2xl  lg:relative lg:z-40 lg:-mx-3 lg:mb-0 lg:flex lg:w-1/3 lg:max-w-none lg:flex-col lg:px-10 lg:py-10">
							<Col className="w-full flex-grow">
								<h2 className="mb-4 text-center text-xl font-bold uppercase">Family Order</h2>
								<h3 className="mb-5 text-center text-4xl  font-bold">£65/order</h3>

								<ul className="mb-8 px-5 text-sm">
									{familyList.map(data => (
										<li className="text-lg leading-tight">
											<Row>
												<Check className="my-auto h-6 w-6 text-black" /> {data}
											</Row>
										</li>
									))}
								</ul>
							</Col>
							<button
								onClick={() => handleCheckout('family')}
								className="delay-400 mx-auto w-full transform rounded-lg bg-gray-800 px-10 py-2 font-bold text-white transition-colors duration-200 hover:bg-gray-900 focus:outline-none"
							>
								Start Order
							</button>
						</div>

						{/* Corporate Order */}
						<div className="mx-auto mb-3 w-full rounded-lg border bg-white px-8 py-8 shadow-2xl  lg:z-30 lg:my-6 lg:flex lg:w-1/3 lg:max-w-none lg:flex-col lg:px-10 lg:py-10">
							<div className="w-full flex-grow">
								<h2 className="mb-4 text-center text-xl font-bold uppercase">Corporate Order</h2>

								<h3 className="mt-2 mb-5 text-center text-3xl font-bold">Contact US</h3>

								<ul className="mb-8 px-5 text-sm">
									{corporateList.map(data => (
										<li className="text-lg leading-tight">
											<Row>
												<Check className="my-auto h-6 w-6 text-black" /> {data}
											</Row>
										</li>
									))}
								</ul>
							</div>

							<button
								onClick={handleModal}
								className="delay-400 mx-auto w-full transform rounded-lg bg-gray-800 px-10 py-2 font-bold text-white duration-200 hover:bg-gray-900"
							>
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</div>

			{openModal && <DynamicContactModal open={handleModal} />}
		</>
	)
}

export default SnackBox
