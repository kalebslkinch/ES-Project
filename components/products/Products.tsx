import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import TransitionProducts from '../transitions/TransitionProducts'
import Plus from '../svg/Plus'
import Minus from '../svg/Minus'
import Image from 'next/image'
import { Col, Row } from '../EasyComponents/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { handleRemove, selectCartState, setCart } from '../../redux/CartSlice'

const Products: FC<{ id: string; title: string; description: string; image: string; price: string }> = ({
	id,
	title,
	description,
	image,
	price
}) => {
	const cart = useSelector(selectCartState)
	const dispatch = useDispatch()
	const checkItem = cart.find(item => item.id === id)

	const [alreadyDone, setAlreadyDone] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)

	console.log('Check Item', checkItem)

	// Refresh Router
	const router = useRouter()

	// Put item data into an object
	const itemData: {
		id: string
		title: string
		description: string
		image: string
		price: string
		quantity: number
	} = { id, title, description, image, price, quantity: 1 }

	// Increase quantity amount
	const handleIncrease = () => {
		// Check if item is already in cart
		// Update cart cookie with new quantity of current itemData
		cookie.set(
			'cart',
			JSON.stringify(cart.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
		)
		// Update cart state with new quantity of current itemData
		dispatch(setCart(cart.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))))
	}

	// Decrease quantity amount
	const handleDecrease = (): void => {}

	// Empty Array
	const handleCart = (): void => {
		// If cart is greater than 0
		if (cart.length <= 0) {
			// Set cart cookie to currentItemData
			cookie.set('cart', JSON.stringify([itemData]))
			// Set cart state to currentItemData
			dispatch(setCart([itemData]))
		} else {
			// If item is already in cart
			if (!checkItem) {
				// Set cart cookie to current cart + currentItemData
				cookie.set('cart', JSON.stringify([...cart, itemData]))
				// Set cart state to current cart + currentItemData
				dispatch(setCart([...cart, itemData]))
			}
		}
	}

	return (
		<>
			<Col className="my-2 h-auto overflow-hidden rounded-lg bg-white shadow-2xl xl:w-[280px] ">
				<TransitionProducts>
					<Col>
						{/* Product Info Wrapper */}
						<h3 className="h-[55px] overflow-hidden px-4 pt-3 text-[1.8rem] font-bold capitalize text-gray-700">
							{title}
						</h3>
						{/* Description */}
						<p className="text-md overflow-hidden px-4 pt-1 text-gray-600 sm:h-[80px]">{description}</p>
					</Col>
					{/* Image Link */}
					<Link href={`/${id}`}>
						{/* Image */}
						<button className="relative mt-2 flex h-48 w-full focus:outline-none">
							<Image className="" src={image} layout="fill" objectFit="cover" />
						</button>
					</Link>

					{/* Price and Quantity Wrapper */}
					<Row className="itemData-center flex justify-between bg-gray-900 px-4 py-2">
						{/* Price */}
						{parseFloat(price) >= 1 ? (
							<>
								<h1 className="text-xl font-bold text-gray-200">£ {parseFloat(price).toFixed(2)}</h1>
							</>
						) : (
							<>
								<h1 className="text-xl font-bold text-gray-200">{parseFloat(price).toFixed(2).slice(-2)}p</h1>
							</>
						)}

						{/* Add to Bag Button */}
						{!checkItem && (
							<button
								onClick={handleCart}
								className="rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900 focus:animate-addToBag focus:outline-none"
							>
								Add to bag
							</button>
						)}

						{/* Quantity */}
						{checkItem && (
							<div
								onClick={handleCart}
								className={`flex flex-row  rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900 focus:animate-addToBag focus:outline-none`}
							>
								<span>{checkItem.quantity}</span>

								{/* Minus Button */}
								<button disabled={quantity <= 0} onClick={handleDecrease} className="my-auto ml-3">
									<Minus className="my-auto h-5 w-5" />
								</button>

								{/* Plus Button */}
								<button onClick={handleIncrease} className="my-auto ml-1">
									<Plus className=" h-5 w-5" />
								</button>
							</div>
						)}
					</Row>
				</TransitionProducts>
			</Col>
		</>
	)
}

export default Products
