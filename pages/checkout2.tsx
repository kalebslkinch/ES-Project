import BillingInformation from '../components/orders/BillingInformation'
import { useState } from 'react'
import { FSCol } from '../components/EasyComponents/FScreen'
import { useEffect } from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'

const Billing = ({}) => {
	const router = useRouter()
	const user = { authentication: 'authenticated' }
	const isUser = user.authentication === 'authenticated'
	const [products, setProducts] = useState<
		| []
		| {
				id: string
				title: string
				description: string
				image: string
				price: string
				quantity: number
		  }[]
	>([])

	useEffect(() => {
		if (cookie.get('cart') === undefined) {
			router.push('/')
		} else {
			setProducts(JSON.parse(cookie.get('cart') as string))
		}
	}, [])

	console.log(products)

	const [deliveryInformation, setDeliveryInformation] = useState<{
		firstname: string
		surname: string
		email: string
		address: string
		postcode: string
		number: string
		isMember: boolean
		isShipped: boolean
		isCompleted: boolean
	}>({
		firstname: '',
		surname: '',
		email: '',
		address: '',
		postcode: '',
		number: '',
		isMember: false,
		isShipped: false,
		isCompleted: false
	})

	const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'stripe'>('paypal')

	const handleCheckout = async (): Promise<any> => {
		const postableDeliveryInformation = {
			firstname: deliveryInformation.firstname,
			surname: deliveryInformation.surname,
			email: deliveryInformation.email,
			address: deliveryInformation.address,
			postcode: deliveryInformation.postcode,
			number: deliveryInformation.number,
			isMember: isUser,
			isShipped: deliveryInformation.isShipped,
			isCompleted: deliveryInformation.isCompleted
		}

		const postData: {
			customerID: string
			products: string
			deliveryInformation: string
			totalAmount: number
			totalQuantity: number
			paymentMethod: 'paypal' | 'stripe'
		} = {
			customerID: '',
			products: JSON.stringify(products),
			deliveryInformation: JSON.stringify(postableDeliveryInformation),
			totalAmount: 0,
			totalQuantity: 0,
			paymentMethod: paymentMethod
		}

		await axios.post('/api/post/order', postData)
	}

	const totalAmount = products.map(product => Number(product.price) * product.quantity).reduce((a, b) => a + b, 0)

	console.log('Total amount: ' + totalAmount)
	const handleCardPayment = async (e: any): Promise<any> => {
		e.preventDefault()
		setPaymentMethod('stripe')
		handleCheckout()
	}

	const handlePayPalPayment = (e: any): void => {
		e.preventDefault()
		setPaymentMethod('paypal')
		handleCheckout()
	}

	return (
		// <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID.clientId }}>
		<FSCol className="h-[90vh]">
			<div className="my-auto flex w-screen justify-center">
				<form onSubmit={handleCardPayment} className="mx-2 w-full sm:mx-4 sm:max-w-md md:py-4 lg:max-w-lg">
					<BillingInformation
						setDeliveryInformation={setDeliveryInformation}
						deliveryInformation={deliveryInformation}
						totalAmount={totalAmount}
					/>
					<div className="mx-auto mt-2 flex w-full flex-col justify-center">
						{/* <PayPalButtons
							style={{
								color: 'blue',
								shape: 'pill',
								label: 'pay',
								tagline: false,
								layout: 'horizontal'
							}}
							createOrder={createOrder}
							onApprove={onApprove}
						/> */}
						<button
							type="submit"
							className="rounded-full border bg-gray-800 py-2 text-xl text-white focus:outline-none "
						>
							Pay By Card
						</button>
					</div>
				</form>
			</div>
		</FSCol>
		// </PayPalScriptProvider>
	)
}

export default Billing
