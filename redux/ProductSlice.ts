import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'

// Type for our state
export interface ProductState {
	productState: {
		id: string
		title: string
		description: string
		image: string
		price: number
		quantity: number
		createdAt: string
	}
}

// Initial state
const initialState: ProductState = {
	productState: {
		id: '',
		title: '',
		description: '',
		image: '',
		price: 0,
		quantity: 0,
		createdAt: ''
	}
}

// Actual Slice
export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		// Action to set the authentication status
		setProduct(state, action) {
			state.productState = action.payload
		}
	}
})

export const { setProduct } = productSlice.actions

export const selectProductState = (state: AppState) => state.product.productState

export default productSlice.reducer
