import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import TransitionProducts from '../transitions/TransitionProducts'
import Plus from '../svg/Plus'
import Minus from '../svg/Minus'
import Image from 'next/image'
import { Col, Row } from '../EasyComponents/Flex'
import { useDispatch } from 'react-redux'
import { handleRemove, setCart } from '../../redux/CartSlice'

const Products: FC<{ id: string; title: string; description: string; image: string; price: string }> = ({
	id,
	title,
	description,
	image,
	price
}) => {
	const dispatch = useDispatch()
	const [alreadyDone, setAlreadyDone] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)
	const [counter, setCounter] = useState<number>(0)

	// Refresh Router
	const router = useRouter()
	const refreshData = (): void => {
		router.replace(router.asPath, router.asPath, { scroll: false })
	}

	// Put item data into an object
	const itemData: {
		id: string
		title: string
		description: string
		image: string
		price: string
		quantity: number
	} = { id, title, description, image, price, quantity: 1 }

	useEffect(() => {
		const cart: string = 'cart'
		if (cookie.get(cart) === undefined) {
		} else {
			const storedData = JSON.parse(cookie.get(cart) as any)

			const titles: string[] = storedData.map((data: any) => data.title)

			if (titles.includes(title)) {
				if (storedData[titles.indexOf(title)].quantity <= 0) {
					setAlreadyDone(false)
					dispatch(handleRemove(title))
					refreshData()
				} else {
					setAlreadyDone(true)
					setQuantity(storedData[titles.indexOf(title)].quantity)
					refreshData()
				}
			} else {
				setAlreadyDone(false)
				refreshData()
			}
		}
	}, [counter])

	// Decrease quantity amount
	const handleDecrease = (): void => {
		const cart = 'cart'
		const items: typeof itemData = {
			id,
			title,
			description,
			image,
			price,
			quantity
		}

		const stringGetItems: any = cookie.get(cart)
		const getItems = JSON.parse(cookie.get(cart) as string)

		const titles = getItems.map((data: typeof itemData) => data.title)
		if (stringGetItems[titles.indexOf(title)].quantity - 1 <= 0) {
			dispatch(handleRemove(title))
			setAlreadyDone(false)
		} else {
			const newCart = stringGetItems.replace(
				JSON.stringify(items),
				JSON.stringify({ ...items, quantity: quantity - 1 })
			)
			cookie.set(cart, newCart)
			dispatch(setCart(newCart))
		}
	}

	// Empty Array
	const handleCart = (): void => {
		const cart = 'cart'
		if (cookie.get(cart) === undefined) {
			cookie.set(cart, JSON.stringify([itemData]))
			dispatch(setCart([itemData]))
			setAlreadyDone(true)
		} else {
			const storedData = JSON.parse(cookie.get(cart) as string)
			const stringGetItems: string = cookie.get(cart) as string
			const items: typeof itemData = {
				id,
				title,
				description,
				image,
				price,
				quantity
			}
			const titles: string[] = storedData.map((data: typeof itemData) => data.title)

			if (titles.includes(title)) {
				const newCart = stringGetItems.replace(
					JSON.stringify(items),
					JSON.stringify({ ...items, quantity: quantity + 1 })
				)
				setCounter(counter + 1)
				cookie.set(cart, JSON.parse(newCart))
				dispatch(setCart(JSON.parse(newCart)))
			} else {
				const addData = [...storedData, itemData]
				cookie.set(cart, JSON.stringify(addData))
				dispatch(setCart(addData))
				setAlreadyDone(true)
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
						{!alreadyDone && (
							<button
								onClick={handleCart}
								className="rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900 focus:animate-addToBag focus:outline-none"
							>
								Add to bag
							</button>
						)}

						{/* Quantity */}
						{alreadyDone && (
							<div
								onClick={handleCart}
								className={`flex flex-row  rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900 focus:animate-addToBag focus:outline-none`}
							>
								<span>{quantity}</span>

								{/* Minus Button */}
								<button disabled={quantity <= 0} onClick={handleDecrease} className="my-auto ml-3">
									<Minus className="my-auto h-5 w-5" />
								</button>

								{/* Plus Button */}
								<button onClick={handleCart} className="my-auto ml-1">
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
