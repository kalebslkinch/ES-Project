import { FC, useState } from 'react'

const ErrorPop: FC<{ text: string }> = ({ text }) => {
	const [close, setClose] = useState<boolean>(false)
	const handleClose = (): void => {
		setClose(true)
	}
	return (
		<>
			<div
				className={
					close
						? 'hidden'
						: '-mbg-gray-800  mx-auto flex w-full max-w-xs animate-fadein overflow-hidden rounded-lg bg-white  shadow-md'
				}
			>
				<div className="flex  w-1/6 items-center justify-center bg-red-800">
					<svg
						className="h-6 w-6 animate-error fill-current text-white"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
					</svg>
				</div>

				<div className="-mx-3 w-5/6 px-4 py-2">
					<div className="mx-3">
						<span className="-mtext-red-400 font-semibold  text-red-500">Error</span>
						<p className="-mtext-gray-200 text-sm  text-gray-600">{text}</p>
					</div>
				</div>
				<button onClick={handleClose} className="align-start flex focus:outline-none ">
					<img src="cross.svg" className=" h-4 w-4" />
				</button>
			</div>
		</>
	)
}

export default ErrorPop
