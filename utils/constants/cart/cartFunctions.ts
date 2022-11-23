import { CookieAttributes } from 'js-cookie'
import { SetStateAction } from 'react'
import { decreaseQuantity, handleRemove, increaseQuantity, setCart } from '../../../redux/CartSlice'

// Increase quantity amount
const handleIncrease = (
	dispatch: any,
	id: string,
	cart: {
		id: string
		title: string
		description: string
		image: string
		price: number
		quantity: number
	}[]
): void => {
	dispatch(increaseQuantity({ id, cart }))
}

// Decrease quantity amount
const handleDecrease = (
	dispatch: any,
	currentItem: {
		id: string
		title: string
		description: string
		image: string
		price: number
		quantity: number
	},
	setCurrentItem: SetStateAction<any>,
	title: string,
	id: string,
	cart: {
		id: string
		title: string
		description: string
		image: string
		price: number
		quantity: number
	}[]
): void => {
	if ((currentItem as any).quantity === 1) {
		dispatch(handleRemove(title))
		setCurrentItem(null)
	} else {
		dispatch(decreaseQuantity({ id, cart }))
	}
}

const handleCart = (
	dispatch: any,
	cookie: CookieAttributes,
	cart: {
		id: string
		title: string
		description: string
		image: string
		price: number
		quantity: number
	}[],
	itemData: {
		id: string
		title: string
		description: string
		image: string
		price: string
		quantity: number
	},
	currentItem: {
		id: string
		title: string
		description: string
		image: string
		price: string
		quantity: number
	} | null
): void => {
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

export { handleIncrease, handleDecrease, handleCart }
