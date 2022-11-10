import { useForm } from 'react-hook-form'
import ErrorPop from '../components/ErrorPop'
import { useState } from 'react'
import SucessPop from '../components/SuccessPop'
import { useMutation } from '@apollo/client'
import { ADD_CONTACT_US } from '../graphql/mutations/addContactUsMessages'
import At from '../components/svg/At'
import Mobile from '../components/svg/Mobile'
import cookie from 'js-cookie'
import Insta from '../components/svg/Insta'
import TransitionContactUS from '../components/transitions/TransitionContactUS'
import { Col } from '../components/EasyComponents/Flex'
import { NextPage } from 'next'

const ContactUs: NextPage = () => {
	const [addMessages, { data }] = useMutation(ADD_CONTACT_US)
	cookie.set('messageSent', 'new')

	const [sucessful, setSucessful] = useState<boolean>(false)
	const [contactMessage, setContactMessage] = useState<{
		name: string
		email: string
		message: string
	}>({
		name: '',
		email: '',
		message: ''
	})
	// hook form
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const handleAlert = async (): Promise<any> => {
		if (cookie.get('messageSent') === 'new') {
			cookie.set('messageSent', '0')
			addMessages({ variables: { data: contactMessage } })
		} else {
			return
		}

		setSucessful(true)
	}
	return (
		<>
			<div className="mt-8 mb-4">
				{sucessful ? <SucessPop /> : null}
				{errors.message && <ErrorPop text="Message is required" />}
			</div>
			<Col className="mx-auto w-full max-w-2xl overflow-hidden bg-white py-4 sm:px-6">
				<TransitionContactUS>
					<h2 className="h-14 overflow-hidden truncate py-1 text-center text-4xl font-medium text-gray-800 sm:h-full  sm:truncate">
						Need to get in touch?
					</h2>
					<p className="mx-auto mt-3 h-24 w-4/5 animate-fadein overflow-hidden overflow-ellipsis text-center text-gray-800 sm:h-full">
						Contact us on one of the options below or just leave us a message
					</p>

					<div className="mt-6 grid grid-cols-1 gap-6 md:-translate-x-6 md:grid-cols-3">
						<a href="#" className="flex flex-col items-center rounded-md py-3 px-4 hover:bg-blue-200">
							<Insta className="h-6 w-6" />

							<span className="mt-2">exotic.snaxx</span>
						</a>

						<a href="#" className="flex flex-col items-center rounded-md px-4 py-3 text-gray-800 hover:bg-blue-200">
							<Mobile className="h-6 w-6" />
							<span className="mt-2">+4407516516000</span>
						</a>

						<a href="#" className="flex flex-col items-center rounded-md px-4 py-3 text-gray-800 hover:bg-blue-200">
							<At className="h-6 w-6" />
							<span className="mt-2">example@example.com</span>
						</a>
					</div>
					<form autoComplete="off" className="flex w-full flex-col" onSubmit={handleSubmit(handleAlert)}>
						<div className="mx-4 mt-6 sm:mx-0">
							<Col className="md:flex-row md:space-x-4">
								<div className="w-full">
									{/* Name */}
									<label className="mb-2 block text-sm font-medium text-gray-800">Name*</label>

									<input
										value={contactMessage.name}
										required
										disabled={sucessful ? true : false}
										minLength={3}
										onChange={e =>
											setContactMessage({
												...contactMessage,
												name: e.target.value
											})
										}
										className="block w-full overflow-hidden rounded-md border border-gray-500 bg-white px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring"
									/>
								</div>

								<div className="mt-4 w-full md:mt-0">
									{/* Email */}
									<div className="mb-2 block text-sm font-medium text-gray-800">E-mail*</div>

									<input
										value={contactMessage.email}
										required
										autoComplete="off"
										disabled={sucessful ? true : false}
										onChange={e =>
											setContactMessage({
												...contactMessage,
												email: e.target.value
											})
										}
										className="block w-full overflow-hidden rounded-md border border-gray-500  bg-white  px-4  py-2 text-gray-800  focus:border-blue-500 focus:outline-none focus:ring"
									/>
								</div>
							</Col>

							<div className="mt-4 w-full sm:ml-0">
								{/* Message */}
								<label className="mb-2 ml-1 block text-sm font-medium text-gray-800 sm:ml-0">Message*</label>

								<textarea
									value={contactMessage.message}
									disabled={sucessful ? true : false}
									{...register('message', {
										required: true,
										minLength: 10
									})}
									onChange={e =>
										setContactMessage({
											...contactMessage,
											message: e.target.value
										})
									}
									className="block h-40 w-full rounded-md border border-gray-500 bg-white px-4 py-2 text-gray-800  focus:border-blue-500  focus:outline-none focus:ring"
								></textarea>
							</div>

							<div className="mt-6 flex w-full justify-end">
								<button
									disabled={sucessful ? true : false}
									type="submit"
									className="transform rounded-md bg-gray-700 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
								>
									Send Message
								</button>
							</div>
						</div>
					</form>
				</TransitionContactUS>
			</Col>
		</>
	)
}

export default ContactUs
