import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { cartSlice } from './CartSlice'

const makeStore = () =>
	configureStore({
		reducer: {
			[cartSlice.name]: cartSlice.reducer
		},

		devTools: true
	})

const store = configureStore({
	reducer: {
		[cartSlice.name]: cartSlice.reducer
	}
})

export default store
export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
