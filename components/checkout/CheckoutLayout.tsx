import cookie from 'js-cookie'
import Link from 'next/link'
import CheckoutItems from './CheckoutItems'
import Bag from '../svg/Bag'
import { FC, useState } from 'react'
import TransitionCheckout from '../transitions/TransitionCheckout'
import TransitionBag from '../transitions/TransitionBag'

const CheckoutLayout: FC = () => {
	const [succeeded, setSucceeded] = useState<boolean>(false)

	const cart: string = 'cart'
	if (cookie.get(cart) === undefined) {
		return (
			<div className="flex justify-center pt-16">
				{/* Bag Icon */}
				<TransitionBag>
					<Bag className="h-32 w-32 animate-fadein md:h-64 md:w-64" />
				</TransitionBag>
			</div>
		)
	}
	const getStorage: {
		id: string
		title: string
		description: string
		image: string
		price: number
		quantity: number
	}[] = JSON.parse(cookie.get(cart))
	if (getStorage.length > 0) {
		const totalAmount = getStorage.map(data => data.quantity * data.price).reduce((a, b) => a + b)

		if (succeeded) {
			return <></>
		}
		return (
			<>
				<div className="w-full max-w-full animate-fadein overflow-scroll py-8 md:overflow-auto">
					<TransitionCheckout>
						<div className="sm:px-4 ">
							<div className="max-w-screen inline-block w-full rounded-lg ">
								<table className="max-w-screen w-full leading-normal">
									{/* Table Headers */}
									<thead>
										<tr>
											{/* Name */}
											<th
												scope="col"
												className="border-b border-gray-200 bg-white  px-10 py-3 text-left  text-sm font-normal uppercase text-gray-800"
											>
												Name
											</th>

											{/* Description */}
											<th
												scope="col"
												className="border-b border-gray-200 bg-white   px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
											>
												Description
											</th>

											{/* Price */}
											<th
												scope="col"
												className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
											>
												Price
											</th>

											{/* Quantity */}
											<th
												scope="col"
												className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
											>
												Quantity
											</th>

											<th
												scope="col"
												className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
											></th>

											{/* Total */}
											<th
												scope="col"
												className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
											>
												Total
											</th>
											<th
												scope="col"
												className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
											>
												{''}
											</th>
										</tr>
									</thead>

									{/* Checkout Items */}
									{getStorage !== undefined &&
										getStorage.map(data => (
											<CheckoutItems
												title={data.title}
												description={data.description}
												price={data.price}
												image={data.image}
												quantity={data.quantity}
												id={data.id}
											/>
										))}
								</table>

								<div className="max-w-screen absolute flex w-full flex-col items-center bg-white py-5 sm:relative sm:px-5">
									<div className="flex items-center">
										{getStorage === undefined ? (
											<></>
										) : (
											<div>
												<div className="flex animate-fadein items-center bg-white py-5  sm:px-5 ">
													<div className="pb-4 flex items-center">
														{/* Proceed to Checkout Link */}
														<button className="undefined flex cursor-pointer justify-center rounded border border-gray-800 bg-opacity-0 px-4 py-2 text-base font-bold text-gray-800 delay-100 duration-300 hover:scale-110 hover:text-blue-900 focus:outline-none">
															<Link href="/checkout2">
																<a className="animate-fadein">
																	Proceed to Checkout{' '}
																	{totalAmount >= 1 ? (
																		<> £{totalAmount.toFixed(2)} </>
																	) : (
																		<>{totalAmount.toFixed(2).toString().slice(-2)}p</>
																	)}
																</a>
															</Link>
														</button>
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</TransitionCheckout>
				</div>
			</>
		)
	} else {
		return (
			<div className="flex justify-center  pt-16">
				<TransitionBag>
					<Bag className="h-32 w-32 animate-fadein md:h-64 md:w-64" />
				</TransitionBag>
			</div>
		)
	}
}

export default CheckoutLayout
