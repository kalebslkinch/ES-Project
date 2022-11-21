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

export const { setCart, handleRemove } = cartSlice.actions

export const selectCartState = (state: AppState) => state.cart.cartState

export default cartSlice.reducer
