import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import cookie from 'js-cookie'
import arrayRemove from '../utils/constants/arrayRemove'
// Type for our state
export interface CartState {
	cartState: {
		id: string
		title: string
		description: string
		image: string
		price: number
		quantity: number
	}[]
}

// Initial state
const initialState: CartState =
	cookie.get('cart') === undefined
		? {
				cartState: [
					{
						id: '',
						title: '',
						description: '',
						image: '',
						price: 0,
						quantity: 0
					}
				]
		  }
		: {
				cartState: JSON.parse(cookie.get('cart') as string)
		  }

// Actual Slice
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// Action to set the authentication status
		setCart(state, action) {
			state.cartState = action.payload
		},
		increaseQuantity(state, action) {
			// Check if item is already in cart
			// Update cart cookie with new quantity of current itemData
			cookie.set(
				'cart',
				JSON.stringify(
					action.payload.cart.map((item: any) =>
						item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
					)
				)
			)
			// Update cart state with new quantity of current itemData
			state.cartState = action.payload.cart.map((item: any) =>
				item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
			)
		},
		handleRemove(state, action) {
			const cart = 'cart'

			// Get items from the local storage
			const getItems = JSON.parse(cookie.get(cart) as any)

			// Get the tiltes from the array
			const titles = getItems.map((data: any) => data.title)

			// Index of the items
			const index = titles.indexOf(action.payload)
			const newCart: any = arrayRemove(getItems, getItems[index])

			// Add back to the local storage
			cookie.set(cart, newCart)
			state = newCart
		}
	}
})

export const { setCart, handleRemove, increaseQuantity } = cartSlice.actions

export const selectCartState = (state: AppState) => state.cart.cartState

export default cartSlice.reducer
