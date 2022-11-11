import { useMutation } from '@apollo/client'
import { FC, MouseEventHandler, useState } from 'react'
import { ADD_CONTACT_ORDER } from '../../graphql/mutations/addContactOrder'
import { Col, Row } from '../EasyComponents/Flex'
import Cross from '../svg/Cross'

const ContactModal: FC<{ open: MouseEventHandler<any> }> = ({ open }) => {
	// Mutation
	const [addContactOrder, { data }] = useMutation(ADD_CONTACT_ORDER)

	// States
	const [formData, setFormData] = useState<{
		name: string
		email: string
		budgetAmount: string
		prefferedDate: string
		message: string
	}>({
		name: '',
		email: '',
		budgetAmount: '',
		prefferedDate: '',
		message: ''
	})

	const [successful, setSucessful] = useState<boolean>(false)

	// Handle submit
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
		e.preventDefault()

		// Current date
		const currentDate: Date = new Date()
		const date: string = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`

		// Mutate Data
		addContactOrder({ variables: { data: { ...formData, date } } })

		// Set Sucessful
		setSucessful(true)
	}

	return (
		<div className="max-w-screen fixed left-0 bottom-0 z-50 flex h-screen w-full items-center  justify-center bg-gray-800">
			<div className="h-screen w-full overflow-scroll rounded-lg bg-white pb-12 sm:w-4/5 md:h-auto ">
				{/* Close Button */}
				<button
					onClick={open}
					className="mt-2 mr-2 ml-auto flex"
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					title="Close"
				>
					{/* Cross Icon */}
					<Cross className="h-8 w-8" />
				</button>

				<Col className="w-full items-center">
					{/* Title */}
					<h3 className="mt-2 text-4xl">Contact Us</h3>

					{/* Subtitle */}
					<p className="mt-4 text-lg">How can we be of assistance?</p>

					{/* Form */}
					<form autoComplete="off" onSubmit={handleSubmit}>
						<div className="mt-6 ">
							<div className="-mx-2 items-center md:flex">
								<div className="mx-2 w-full">
									{/* Name Label */}
									<label className="-mtext-gray-200 mb-2 block text-sm font-medium  text-gray-800">Name*</label>

									{/* Name Input */}
									<input
										placeholder="Name"
										value={formData.name}
										required
										disabled={successful ? true : false}
										minLength={3}
										onChange={e =>
											setFormData({
												...formData,
												name: e.target.value
											})
										}
										className="-mbg-gray-800 -mtext-gray-300 -mborder-gray-600 -mfocus:border-blue-500 block w-full overflow-hidden rounded-md border border-gray-500  bg-white  px-2  py-2 text-gray-800  focus:border-blue-500 focus:outline-none focus:ring"
									/>
								</div>

								<div className="mx-2 mt-4 w-full md:mt-0">
									{/* Email Label */}
									<label className="-mtext-gray-200 mb-2 block text-sm font-medium  text-gray-800">E-mail*</label>

									{/* Email P */}
									<input
										placeholder="Email"
										value={formData.email}
										required
										autoComplete="off"
										disabled={successful ? true : false}
										onChange={e =>
											setFormData({
												...formData,
												email: e.target.value
											})
										}
										className="-mbg-gray-800 -mtext-gray-300 -mborder-gray-600 -mfocus:border-blue-500 block w-full overflow-hidden rounded-md border border-gray-500  bg-white  px-2  py-2 text-gray-800  focus:border-blue-500 focus:outline-none focus:ring"
									/>
								</div>
							</div>

							<Row className="space-x-4">
								<Col>
									{/* Budget Amount Label */}
									<label className="-mtext-gray-200 mt-4 mb-2 block text-sm font-medium  text-gray-800">
										Budget Amount
									</label>

									{/* Budget Amount Input */}
									<input
										placeholder="Would be helpful to know"
										value={formData.budgetAmount}
										disabled={successful ? true : false}
										minLength={3}
										onChange={e =>
											setFormData({
												...formData,
												budgetAmount: e.target.value
											})
										}
										className="-mbg-gray-800 -mtext-gray-300 -mborder-gray-600 -mfocus:border-blue-500 block w-full overflow-hidden rounded-md border border-gray-500  bg-white  px-2  py-2 text-gray-800  focus:border-blue-500 focus:outline-none focus:ring"
									/>
								</Col>

								<Col>
									{/* Preffered Date Label */}
									<label className="-mtext-gray-200 mt-4 mb-2 block text-sm font-medium  text-gray-800">
										Preffered Date
									</label>

									{/* Preffered Date Input */}
									<input
										placeholder="What date is best for you?"
										value={formData.prefferedDate}
										disabled={successful ? true : false}
										minLength={3}
										onChange={e =>
											setFormData({
												...formData,
												prefferedDate: e.target.value
											})
										}
										className="-mbg-gray-800 -mtext-gray-300 -mborder-gray-600 -mfocus:border-blue-500 block w-full overflow-hidden rounded-md border border-gray-500  bg-white  px-2  py-2 text-gray-800  focus:border-blue-500 focus:outline-none focus:ring"
									/>
								</Col>
							</Row>

							<div className="ml-1 mt-4 w-full  sm:ml-0">
								{/* Message Input */}
								<label className="-mtext-gray-200 mb-2 ml-1 block text-sm font-medium text-gray-800  sm:ml-0">
									Message*
								</label>

								{/* Message Text Area */}
								<textarea
									placeholder={`Please share what items you will like to order with the quantity amount.\n\nWe will be in touch with you shortly.`}
									value={formData.message}
									disabled={successful ? true : false}
									onChange={e =>
										setFormData({
											...formData,
											message: e.target.value
										})
									}
									className="-mbg-gray-800 -mtext-gray-300 -mborder-gray-600 -mfocus:border-blue-500 block h-40 w-full overflow-hidden rounded-md border border-gray-500  bg-white  px-2  py-2 text-gray-800  focus:border-blue-500 focus:outline-none focus:ring"
								/>
							</div>

							<div className="mt-6 flex justify-center">
								{/* Send Message Button */}
								<button
									disabled={successful ? true : false}
									type="submit"
									className="transform rounded-md bg-gray-700 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
								>
									{!successful ? 'Send Message' : 'Message Sent'}
								</button>
							</div>
						</div>
					</form>
				</Col>
			</div>
		</div>
	)
}
export default ContactModal
