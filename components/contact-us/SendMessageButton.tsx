import React, { FC } from 'react'
const SendMessageButton: FC<{ successful: boolean }> = ({ successful }) => {
	return (
		<div className="mt-6 flex w-full justify-end">
			<button
				disabled={successful ? true : false}
				type="submit"
				className="transform rounded-md bg-gray-700 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
			>
				Send Message
			</button>
		</div>
	)
}

export default SendMessageButton
