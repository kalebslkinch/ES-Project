import { FC, useState } from 'react'
import Cross from './svg/Cross'

const SucessPop: FC = () => {
	const [close, setClose] = useState<boolean>(false)
	const handleClose = (): void => {
		setClose(!close)
	}

	return (
		<>
			{!close && (
				<div className="mx-auto flex w-full max-w-xs animate-fadein overflow-hidden rounded-lg bg-white  shadow-md">
					<div className="flex w-1/6 items-center justify-center bg-green-500">
						<svg
							className="h-6 w-6 animate-error fill-current text-white"
							viewBox="0 0 40 40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
						</svg>
					</div>

					<div className="-mx-3 w-5/6 px-4 py-2">
						<div className="mx-3">
							<span className="-mtext-green-400 font-semibold  text-green-500">Success</span>
							<p className="-mtext-gray-200 text-sm  text-gray-600">Your message has been sent</p>
						</div>
					</div>
					<button onClick={handleClose} className="align-start flex focus:outline-none ">
						<Cross className="my-auto mr-2 h-6 w-6 " />
					</button>
				</div>
			)}
		</>
	)
}

export default SucessPop
