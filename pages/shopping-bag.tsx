import { NextPage } from 'next'
import CheckoutLayout from '../components/checkout/CheckoutLayout'

const ShoppingBag: NextPage = () => {
	return (
		<div className="max-w-screen w-full animate-fadein rounded-md sm:px-8">
			{/* Title */}
			<div className="flex justify-center sm:max-w-7xl">
				<h1 className="mt-10 text-5xl font-medium text-gray-800">Shopping Bag</h1>
			</div>

			{/* Checkout Layout */}
			<CheckoutLayout />
		</div>
	)
}

export default ShoppingBag
