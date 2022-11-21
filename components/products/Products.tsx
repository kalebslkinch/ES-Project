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
import { handleRemove, increaseQuantity, selectCartState, setCart } from '../../redux/CartSlice'

const Products: FC<{ id: string; title: string; description: string; image: string; price: string }> = ({
	id,
	title,
	description,
	image,
	price
}) => {
	const cart = useSelector(selectCartState)
	const dispatch = useDispatch()
	const [currentItem, setCurrentItem] = useState<any>(null)
	useEffect(() => {
		setCurrentItem(cart.find(item => item.id === id))
	}, [cart])

	const [alreadyDone, setAlreadyDone] = useState<boolean>(false)

	console.log('Check Item', currentItem)

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
		dispatch(increaseQuantity({ id, cart }))
	}

	// Decrease quantity amount
	const handleDecrease = (): void => {
		if ((currentItem as any).quantity === 1) {
			dispatch(handleRemove(title))
			setCurrentItem(null)
			console.log('Remove Item')
		} else {
			cookie.set(
				'cart',
				JSON.stringify(cart.map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)))
			)
			// Update cart state with new quantity of current itemData
			dispatch(setCart(cart.map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))))
		}
	}

	// Empty Array
	const handleCart = (): void => {
		if (cart.length <= 0) {
			cookie.set('cart', JSON.stringify([itemData]))
			dispatch(setCart([itemData]))
		} else {
			if (!currentItem) {
				cookie.set('cart', JSON.stringify([...cart, itemData]))
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
						{!currentItem && (
							<button
								onClick={handleCart}
								className="rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900 focus:animate-addToBag focus:outline-none"
							>
								Add to bag
							</button>
						)}

						{/* Quantity */}
						{currentItem && (
							<div
								onClick={handleCart}
								className={`flex flex-row  rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900 focus:animate-addToBag focus:outline-none`}
							>
								<span>{currentItem.quantity}</span>

								{/* Minus Button */}
								<button disabled={currentItem.quantity <= 0} onClick={handleDecrease} className="my-auto ml-3">
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
