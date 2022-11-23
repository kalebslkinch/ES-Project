import { FC } from 'react'
import { Col } from '../EasyComponents/Flex'

const BillingInformation: FC<{
	deliveryInformation: {
		firstname: string
		surname: string
		email: string
		address: string
		postcode: string
		number: string
		isMember: boolean
		isShipped: boolean
		isCompleted: boolean
	}
	setDeliveryInformation: React.Dispatch<
		React.SetStateAction<{
			firstname: string
			surname: string
			email: string
			address: string
			postcode: string
			number: string
			isMember: boolean
			isShipped: boolean
			isCompleted: boolean
		}>
	>
	totalAmount: number
}> = ({ deliveryInformation, setDeliveryInformation, totalAmount }) => {
	return (
		<>
			<h2 className="flex text-center text-2xl text-gray-900">Billing Information</h2>
			<div className="mt-4 flex w-full flex-row justify-center space-x-2 sm:space-x-6 md:max-w-lg md:space-x-10 ">
				<div className="w-full justify-center pb-2">
					{/* Firstname Label */}
					<label className="justify-center text-lg text-gray-700">First Name</label>

					{/* Firstname Input */}
					<input
						onChange={e => setDeliveryInformation({ ...deliveryInformation, firstname: e.target.value })}
						required
						className="border-lg w-full rounded-sm border border-gray-700 pl-1"
						placeholder="First Name"
					/>
				</div>

				<div className="ml-2 flex w-full flex-col justify-center pb-2">
					{/* Surname Label */}
					<label className="justify-center text-lg text-gray-700">Surname</label>

					{/* Surname Input */}
					<input
						onChange={e => setDeliveryInformation({ ...deliveryInformation, surname: e.target.value })}
						required
						className="border-lg w-full rounded-sm border border-gray-700 pl-1"
						placeholder="Surname"
					/>
				</div>
			</div>
			<div className="mt-2 flex w-full justify-center space-x-2 sm:space-x-6 md:max-w-lg md:space-x-10 ">
				<div className="w-full flex-col justify-center pb-2">
					{/* Email Label */}
					<label className="justify-center text-lg text-gray-700">Email</label>

					{/* Email Input */}
					<input
						onChange={e =>
							setDeliveryInformation({
								...deliveryInformation,
								email: e.target.value
							})
						}
						required
						className="border-lg w-full rounded-sm border border-gray-700 pl-1"
						placeholder="Email"
					/>
				</div>
				<div className="ml-2 w-full">
					{/* Mobile Label */}
					<label className="justify-center text-lg text-gray-700">Mobile</label>

					{/* Mobile Input */}
					<input
						onChange={e => setDeliveryInformation({ ...deliveryInformation, number: e.target.value })}
						className="border-lg  w-full rounded-sm border border-gray-700 pl-1 "
						placeholder="Mobile(optional)"
					/>
				</div>
			</div>
			{/* Address Label */}
			<label className="flex justify-center pr-2 pt-2 text-lg text-gray-800 ">Address</label>
			{/* Address Text Area */}
			<div className="flex w-full justify-center">
				<textarea
					required
					onChange={e => setDeliveryInformation({ ...deliveryInformation, address: e.target.value })}
					className="block h-24 w-full rounded-md border border-gray-700 bg-white px-4 py-2 text-black focus:outline-none focus:ring sm:w-full"
				/>
			</div>
			<div className="flex w-full justify-center">
				<Col className="mr-auto w-36 pb-2">
					{/* Postcode Label */}
					<label className="flex pt-2 text-lg text-gray-700">Postcode</label>

					{/* Postcode Input */}
					<input
						placeholder="Postcode"
						onChange={e => setDeliveryInformation({ ...deliveryInformation, postcode: e.target.value })}
						required
						className="w-full border border-gray-700 pl-1"
					/>
				</Col>
				<Col className="my-auto mx-auto flex flex-col pb-2">
					<div className="xs:pl-1 text-bold flex justify-center pl-8 pt-8 text-lg text-gray-700 sm:text-xl">
						Total:
						{totalAmount >= 1 ? <> £{totalAmount.toFixed(2)} </> : <>{totalAmount.toFixed(2).toString().slice(-2)}p</>}
					</div>
				</Col>
			</div>
		</>
	)
}

export default BillingInformation
