import BillingInformation from '../components/orders/BillingInformation'
import {  useState } from 'react'
import { PayPalButtons,  } from '@paypal/react-paypal-js'
import { FSCol } from '../components/EasyComponents/FScreen'

const Billing = ({}) => {
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

	const handleCheckout = (): void => {}
	return (
		// <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID.clientId }}>
		<FSCol className="h-[90vh]">
			<div className="my-auto flex w-screen justify-center">
				<form onSubmit={handleCheckout} className="mx-2 w-full sm:mx-4 sm:max-w-md md:py-4 lg:max-w-lg">
					<BillingInformation
						setDeliveryInformation={setDeliveryInformation
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
		// </PayPalScriptProvider>
	)
}

export default Billing
