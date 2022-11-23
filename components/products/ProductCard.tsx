import { FC, MouseEventHandler } from 'react'
import Cross from '../svg/Cross'

const ProductCard: FC<{
	openUp: MouseEventHandler
	image?: string
	title: string
	description: string
	price: string
}> = ({ openUp, image, title, description, price }) => {
	return (
		<>
			<div className="flex items-center overflow-hidden bg-white p-5 lg:p-10">
				<div className="mx-auto w-full max-w-6xl rounded bg-white p-10 text-gray-800 shadow-2xl md:text-left lg:p-20">
					<div className="flex justify-end">
						<button className="focus:outline-none" onClick={openUp}>
							<Cross className="h-10 w-10" />
						</button>
					</div>
					<div className="flex">
						<div className="mb-10 w-full px-10 md:mb-0 md:w-1/2">
							<div className="relative">
								<div className="absolute top-10 bottom-10 left-10 right-10 z-0 border-4 border-yellow-200"></div>
							</div>
						</div>
						<div className="w-full px-10 md:w-1/2">
							<div className="mb-10">
								<h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
								<p className="text-lg">{description}</p>
							</div>
							<div>
								<div className="mr-5 inline-block align-bottom">
									{parseFloat(price) >= 1 ? (
										<>
											<span className="align-baseline text-2xl leading-none">£ </span>
											<span className="align-baseline text-5xl font-bold leading-none">
												{parseFloat(price).toFixed(2)}
											</span>
										</>
									) : (
										<>
											<span className="align-baseline text-5xl font-bold leading-none">
												{parseFloat(price).toFixed(2).toString().slice(-2)}
											</span>
											<span className="align-baseline text-2xl leading-none">p</span>
										</>
									)}
									<span className="align-baseline text-5xl font-bold leading-none"></span>
								</div>
								<div className="inline-block align-bottom">
									<button className="rounded-full bg-yellow-300 px-10 py-2 font-semibold text-yellow-900 opacity-75 hover:text-gray-900 hover:opacity-100">
										<i className="mdi mdi-cart -ml-2 mr-2" /> Buy Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductCard
