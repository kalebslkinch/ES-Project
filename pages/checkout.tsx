import React, { useEffect, useState } from 'react'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../components/checkout/CheckoutStripeForm'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import CryptoJS from 'crypto-js'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

const Checkout = () => {
	const router = useRouter()
	const [clientSecret, setClientSecret] = useState<string>('')

	useEffect(() => {
		if (cookie.get('orderData') === undefined) {
			router.push('/')
		} else {
			// unencrypted order data
			// Decrypt
			const encryptedData = cookie.get('orderData')

			let bytesOrderDoneData = CryptoJS.AES.decrypt(encryptedData as string, `${process.env.SECRET_ENCRYPTION_KEY}`)
			// Decrypt
			let orderData = JSON.parse(bytesOrderDoneData.toString(CryptoJS.enc.Utf8))

			// Create PaymentIntent as soon as the page loads
			fetch('/api/payment_intent', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(orderData)
			})
				.then(res => res.json())
				.then(data => setClientSecret(data.clientSecret))
		}
	}, [])

	const appearance = {
		theme: 'stripe' as any
	}
	const options = {
		clientSecret,
		appearance
	}

	return (
		<div className="w-screen h-[92vh] flex items-center justify-center">
			{clientSecret && (
				<Elements options={options as StripeElementsOptions} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</div>
	)
}

export default Checkout
