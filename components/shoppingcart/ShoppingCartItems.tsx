import React, { FC, useEffect, useState } from 'react'
import Plus from '../svg/Plus'
import Minus from '../svg/Minus'
import Trash from '../svg/Trash'
import TransitionWidth from '../transitions/TransitionWidth'
import TransitionOpac from '../transitions/TransitionOpac'
import { handleDecrease, handleIncrease } from '../../utils/constants/cart/cartFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { handleRemove, selectCartState } from '../../redux/CartSlice'

const ShoppingCartItem: FC<{
	id: string
	title: string
	description: string
	image: string
	price: number
	quantity: number
}> = ({ id, title, description, image, price, quantity }) => {
	const cart = useSelector(selectCartState)
	const dispatch = useDispatch()

	const [currentItem, setCurrentItem] = useState<any>(null)

	useEffect(() => {
		setCurrentItem(cart.find(item => item.id === id))
	}, [cart])

	const newPrice: number = quantity * price

	return (
		<>
			<div className="w-12 p-2">
				{/* Product Image */}
				<TransitionOpac>
					<img src={image} alt="img product" />
				</TransitionOpac>
			</div>

			<div className="w-32 flex-auto text-sm">
				<TransitionWidth>
					{/* Product Title */}
					<div className="font-bold text-gray-800">{title}</div>

					{/* Product Descriptions */}
					<div className="truncate text-gray-800">{description}</div>

					{/* Product Quantity */}
					<div className="animate-quantityfadein flex text-gray-800 ">
						Qty: {quantity}
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
					</div>
				</TransitionWidth>
			</div>

			<div className="w-18 flex animate-shoppingBagfadein flex-col items-end font-medium">
				<div className="mb-6 h-4 w-4  cursor-pointer rounded-full text-red-700">
					{/* Trash Button */}
					<button className="focus:outline-none" onClick={() => dispatch(handleRemove(title))}>
						<Trash className="transform transition delay-100 duration-300 hover:fill-red-700 " />
					</button>
				</div>
				{/* Price  */}
				{newPrice >= 1 ? <> £{newPrice.toFixed(2)} </> : <>{newPrice.toFixed(2).toString().slice(-2)}p</>}
			</div>
		</>
	)
}

export default ShoppingCartItem
