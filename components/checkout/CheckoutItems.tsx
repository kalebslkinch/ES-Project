import Plus from '../svg/Plus'
import Minus from '../svg/Minus'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleRemove, selectCartState } from '../../redux/CartSlice'
import { handleDecrease, handleIncrease } from '../../utils/constants/cart/cartFunctions'
const CheckoutItems: FC<{
	id: string
	title: string
	description: string
	image: string
	price: number | string
	quantity: number
}> = ({ id, title, description, image, price, quantity }) => {
	const cart = useSelector(selectCartState)
	const dispatch = useDispatch()

	const [currentItem, setCurrentItem] = useState<any>(null)
	useEffect(() => {
		setCurrentItem(cart.find(item => item.id === id))
	}, [cart])

	const newPrice: number = quantity * (price as number)

	return (
		<>
			<tbody>
				<tr>
					<td className="  border-b border-gray-200 bg-white px-5  py-5 text-sm">
						<div className="flex items-center">
							{/* Product Link */}
							<div className="flex-shrink-0">
								<Link href={`/${id}`}>
									<a className="relative block">
										{/* Product Image */}
										<img alt="profile" src={image} className="mx-auto h-10  w-10 object-cover " />
									</a>
								</Link>
							</div>

							{/* Product Title */}
							<div className="ml-3">
								<p className="whitespace-no-wrap overflow-hidden truncate text-gray-900">{title}</p>
							</div>
						</div>
					</td>
					{/* Product Description */}
					<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
						<p className="whitespace-no-wrap overflow-hidden truncate text-gray-900">{description}</p>
					</td>

					{/* Product Price */}
					<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
						<p className="whitespace-no-wrap text-gray-900">
							{' '}
							{price >= 1 ? (
								<> £{parseFloat(price as string).toFixed(2)} </>
							) : (
								<>
									{parseFloat(price as string)
										.toFixed(2)
										.toString()
										.slice(-2)}
									p
								</>
							)}
						</p>
					</td>

					{/* Product Quantity */}
					<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
						<p className="flex justify-center text-gray-900 ">{quantity}</p>
					</td>

					{/* Quantity Toggle Buttons */}
					<td className="animate-quantityfadein flex border-b border-gray-200 bg-white  px-5 py-8 ">
						{/* Minus Button */}
						<button
							className="pl-1 focus:outline-none"
							onClick={() => handleDecrease(dispatch, currentItem, setCurrentItem, title, id, cart)}
						>
							<Minus className="h-4 w-4" />
						</button>

						{/* Plus Button */}
						<button className="pl-1 focus:outline-none" onClick={() => handleIncrease(dispatch, id, cart)}>
							<Plus className="h-4 w-4" />
						</button>
					</td>

					{/* New Calculated Price */}
					<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
						<p className="whitespace-no-wrap flex justify-center text-gray-900">
							{newPrice >= 1 ? <> £{newPrice.toFixed(2)} </> : <>{newPrice.toFixed(2).toString().slice(-2)}p</>}
						</p>
					</td>

					{/* Product Remove Button */}
					<td className="border-b border-gray-200  bg-white px-5 py-5 text-sm">
						<span className="static   px-3 py-1 font-semibold leading-tight text-green-900">
							<button
								onClick={() => dispatch(handleRemove(title))}
								className="transform rounded-full bg-gray-300 px-2 py-2 text-red-800 transition delay-100 duration-300 hover:bg-gray-400 focus:outline-none"
							>
								Remove
							</button>
						</span>
					</td>
				</tr>
			</tbody>
		</>
	)
}

export default CheckoutItems
