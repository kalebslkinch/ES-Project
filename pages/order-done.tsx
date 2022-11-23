import cookie from 'js-cookie'

import CryptoJS from 'crypto-js'
import Link from 'next/link'
import { FSRow } from '../components/EasyComponents/FScreen'
import { Col } from '../components/EasyComponents/Flex'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const CompletedOrder = () => {
	const router = useRouter()

	const [orderData, setOrderData] = useState<any>()
	const [deliveryInformation, setDeliveryInformation] = useState<any>()
	useEffect(() => {
		if (cookie.get('orderData') === undefined) {
			router.push('/')
		} else {
			// Decrypt
			const encryptedData = cookie.get('orderData') as string
			let orderDataBytes = CryptoJS.AES.decrypt(encryptedData, `${process.env.SECRET_ENCRYPTION_KEY}`)

			// Decrypt
			const postableOrderData = JSON.parse(orderDataBytes.toString(CryptoJS.enc.Utf8))
			const deliveryInformationParsed = JSON.parse(postableOrderData.deliveryInformation)
			setOrderData(postableOrderData)
			setDeliveryInformation(deliveryInformationParsed)
			axios.post('/api/post/order', postableOrderData)
			cookie.remove('cart')
			cookie.remove('orderData')
		}
	}, [])

	return (
		<FSRow className="mt-10 justify-center">
			<Col className="max-w-md space-y-4 rounded-lg border border-black bg-gray-800 py-6 px-6 text-lg text-white md:mt-20">
				<h1 className="text-center text-xl">{`${orderData?.deliveryInformation?.firstname ?? ''} ${
					orderData?.deliveryInformation?.surname ?? ''
				}`}</h1>
				<p className="text-md">Your order is now Complete! </p>
				<h3>Customer Email: {deliveryInformation?.email ?? ''}</h3>
				<h3>Customer Address: {deliveryInformation?.address ?? ''}</h3>
				<h3>Post Code: {deliveryInformation?.postcode ?? ''}</h3>
				<h3>Total Quantity: {orderData?.totalQuantity ?? ''}</h3>
				<h3>Total Cost: £{orderData?.totalAmount?.toFixed(2) ?? ''}</h3>
				<Link href="/">
					<button className="mx-auto rounded-lg border py-2 px-1">Return Home</button>
				</Link>
			</Col>
		</FSRow>
	)
}

export default CompletedOrder
