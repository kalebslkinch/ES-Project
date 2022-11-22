import { SetStateAction } from 'react'
import { decreaseQuantity, handleRemove, increaseQuantity } from '../../../redux/CartSlice'

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

export { handleIncrease, handleDecrease }
