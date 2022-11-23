import { PayPalButtons } from '@paypal/react-paypal-js'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import cookie from 'js-cookie'

const PaypalButton: FC<{ totalAmount: number; handleCheckout: () => void; handlePaymentMethod: () => void }> = ({
	totalAmount,
	handleCheckout,
	handlePaymentMethod
}) => {
	const router = useRouter()

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

	// Paypal Payment Successful
	useEffect(() => {
		if (succeeded) {
			handlePaymentMethod()
			handleCheckout()
			alert('Payment Successful')
			cookie.set('cart', JSON.stringify([]))
			router.push('/')
		}
	}, [succeeded])

	return (
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
	)
}

export default PaypalButton
