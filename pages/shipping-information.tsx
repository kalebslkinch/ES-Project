import BillingInformation from '../components/orders/BillingInformation'
import { useState } from 'react'
import { FSCol } from '../components/EasyComponents/FScreen'
import { useEffect } from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { PAYPAL_CLIENT_ID } from '../utils/paypal-client'
import PaypalButton from '../components/orders/PaypalButton'
import CryptoJS from 'crypto-js'
import { NextPage } from 'next'

const Billing: NextPage = () => {
	const router = useRouter()
	const user = { authentication: 'authenticated' }
	const isUser = user.authentication === 'authenticated'

	// Products State
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

	// Order Information state
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
	// Total Order Amount
	const totalAmount = products.map(product => Number(product.price) * product.quantity).reduce((a, b) => a + b, 0)

	// Total Order Quantity
	const totalQuantity = products.map(product => product.quantity).reduce((a, b) => a + b, 0)

	const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'stripe'>('paypal')

	// Handle Checkout
	const handleCheckout = async (paymentMethod: 'paypal' | 'stripe'): Promise<any> => {
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
			totalAmount: totalAmount,
			totalQuantity: totalQuantity,
			paymentMethod: paymentMethod
		}

		if (paymentMethod === 'stripe') {
			// Data Encryption
			let encryptedData = CryptoJS.AES.encrypt(
				JSON.stringify(postData),
				`${process.env.SECRET_ENCRYPTION_KEY}`
			).toString()

			cookie.set('orderData', encryptedData, { expires: 1 })

			router.push('/checkout')
		}
		if (paymentMethod === 'paypal') {
			await axios.post('/api/post/order', postData)
		}
	}

	const handlePayByCard = async (): Promise<any> => {
		handleCheckout('stripe')
	}

	return (
		<PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID.clientId }}>
			<FSCol className="h-[90vh]">
				<div className="my-auto flex w-screen justify-center">
					<div className="mx-2 w-full sm:mx-4 sm:max-w-md md:py-4 lg:max-w-lg">
						<BillingInformation
							setDeliveryInformation={setDeliveryInformation}
							deliveryInformation={deliveryInformation}
							totalAmount={totalAmount}
						/>
						<div className="mx-auto mt-2 flex w-full flex-col justify-center">
							{/* Paypal Button */}
							<PaypalButton
								totalAmount={totalAmount}
								handleCheckout={() => handleCheckout('paypal')}
								handlePaymentMethod={() => setPaymentMethod('paypal')}
							/>

							{/* Stripe Button */}
							<button
								type="submit"
								onClick={handlePayByCard}
								className="rounded-full border bg-gray-800 py-2 text-xl text-white focus:outline-none "
							>
								Pay By Card
							</button>
						</div>
					</div>
				</div>
			</FSCol>
		</PayPalScriptProvider>
	)
}

export default Billing
