import CheckoutForm from '../components/checkout/CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(process.env.NEXT_STRIPE_KEY as string)

const PayByCard = () => {
	return (
		<div className="max-w-screen w-full flex-col justify-center">
			<div className="py-5">
				<div className="App">
					<Elements stripe={promise}>
						<CheckoutForm />
					</Elements>
				</div>
			</div>
		</div>
	)
}

export default PayByCard
