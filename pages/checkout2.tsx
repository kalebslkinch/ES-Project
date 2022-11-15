import BillingInformation from '../components/orders/BillingInformation'
import { useState } from 'react'
import { FSCol } from '../components/EasyComponents/FScreen'
import { useEffect } from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { PAYPAL_CLIENT_ID } from '../utils/paypal-client'

const Billing = () => {
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

	const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'stripe'>('paypal')

	// Paypal States
	const [orderID, setOrderID] = useState<string>()
	const [billingDetails, setBillingDetails] = useState<string>('')
	const [succeeded, setSucceeded] = useState<boolean>(false)
	const [paypalErrorMessage, setPaypalErrorMessage] = useState<string>('')

	// creates a paypal order
	const createOrder = (data: {}, actions: any) => {
		return actions.order
			.create({
				purchase_units: [
					{
						amount: {
							// charged per order
							value: totalAmount.toFixed(2)
						}
					}
				],
				// remove the applicaiton_context object if you need your users to add a shipping address
				application_context: {
					shipping_preference: 'NO_SHIPPING'
				}
			})
			.then((orderID: string) => {
				setOrderID(orderID)
				return orderID
			})
	}

	// handles when a payment is confirmed for paypal
	const onApprove = (data: {}, actions: any) => {
		return actions.order
			.capture()
			.then(function (details: any) {
				const { payer } = details
				setBillingDetails(payer)
				setSucceeded(true)
			})
			.catch((err: any) => setPaypalErrorMessage('Something went wrong.'))
	}

	// Handle Checkout
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

	// Handle Payment
	const handleCardPayment = async (e: any): Promise<any> => {
		e.preventDefault()
		setPaymentMethod('stripe')
	}

	const handlePayPalPayment = (e: any): void => {
		e.preventDefault()
		setPaymentMethod('paypal')
	}

	// Total Order Amount
	const totalAmount = products.map(product => Number(product.price) * product.quantity).reduce((a, b) => a + b, 0)

	// Paypal Payment Successful
	useEffect(() => {
		if (succeeded) {
			setPaymentMethod('paypal')
			handleCheckout()
			alert('Payment Successful')
			cookie.set('cart', JSON.stringify([]))
			router.push('/')
		}
	}, [succeeded])

	return (
		<PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID.clientId }}>
			<FSCol className="h-[90vh]">
				<div className="my-auto flex w-screen justify-center">
					<form onSubmit={handleCardPayment} className="mx-2 w-full sm:mx-4 sm:max-w-md md:py-4 lg:max-w-lg">
						<BillingInformation
							setDeliveryInformation={setDeliveryInformation}
							deliveryInformation={deliveryInformation}
							totalAmount={totalAmount}
						/>
						<div className="mx-auto mt-2 flex w-full flex-col justify-center">
							<PayPalButtons
								style={{
									color: 'blue',
									shape: 'pill',
									label: 'pay',
									tagline: false,
									layout: 'horizontal'
								}}
								createOrder={createOrder}
								onApprove={onApprove}
							/>
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
		</PayPalScriptProvider>
	)
}

export default Billing
