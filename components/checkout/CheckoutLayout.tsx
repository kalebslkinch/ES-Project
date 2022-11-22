import Link from 'next/link'
import CheckoutItems from './CheckoutItems'
import Bag from '../svg/Bag'
import { FC } from 'react'
import TransitionCheckout from '../transitions/TransitionCheckout'
import TransitionBag from '../transitions/TransitionBag'
import { useSelector } from 'react-redux'
import { selectCartState } from '../../redux/CartSlice'

const CheckoutLayout: FC = () => {
	const cart = useSelector(selectCartState)
	if (cart.length === 0) {
		return (
			<div className="flex justify-center pt-16">
				{/* Bag Icon */}
				<TransitionBag>
					<Bag className="h-32 w-32 animate-fadein md:h-64 md:w-64" />
				</TransitionBag>
			</div>
		)
	}

	const totalAmount = cart.map(data => data.quantity * data.price).reduce((a, b) => a + b)

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
								{cart.length > 0 &&
									cart.map(data => (
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
									<div>
										<div className="flex animate-fadein items-center bg-white py-5  sm:px-5 ">
											<div className="pb-4 flex items-center">
												{/* Proceed to Checkout Link */}
												<button className="undefined flex cursor-pointer justify-center rounded border border-gray-800 bg-opacity-0 px-4 py-2 text-base font-bold text-gray-800 delay-100 duration-300 hover:scale-110 hover:text-blue-900 focus:outline-none">
													<Link href="/shipping-information">
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
								</div>
							</div>
						</div>
					</div>
				</TransitionCheckout>
			</div>
		</>
	)
}

export default CheckoutLayout
