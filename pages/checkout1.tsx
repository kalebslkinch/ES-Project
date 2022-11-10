import { NextPage } from 'next'
import CheckoutLayout from '../components/checkout/CheckoutLayout'

const Checkout: NextPage = () => {
	return (
		<div className="max-w-screen w-full animate-fadein rounded-md sm:px-8 ">
			<div className="flex justify-center sm:max-w-7xl">
				{/* Title */}
				<h1 className="mt-10 text-5xl font-medium text-gray-800">Shopping Bag</h1>
			</div>

			<CheckoutLayout />
		</div>
	)
}

export default Checkout
