import { FC, MouseEventHandler } from 'react'
import OrderProductInfoRow from './OrderProductInfoRow'
import Cross from '../svg/Cross'

const OrderProductInfo: FC<{
	productOrderInfo: any
	handleOpen: MouseEventHandler
}> = ({ productOrderInfo, handleOpen }) => {
	return (
		<div
			className="min-w-screen fixed inset-0 z-50 my-auto flex h-screen items-center justify-center overflow-y-auto overflow-x-scroll outline-none focus:outline-none"
			id="modal-id"
		>
			<div className="relative mx-auto my-auto w-full rounded-xl shadow-lg md:max-w-4xl md:bg-white">
				<div className="fixed flex w-full justify-end pr-1 md:relative">
					<button className="my-auto px-2 focus:outline-none" onClick={handleOpen}>
						<Cross className="h-8 w-8" />
					</button>
				</div>
				{/* <!--content--> */}
				<div className="">
					<table className="w-full max-w-full">
						<thead className="justify-between">
							<tr className="bg-gray-400">
								<th className="py-2 text-center text-2xl font-semibold capitalize text-gray-900"></th>

								<th className="px-6 py-4 text-lg font-semibold capitalize">Title</th>
								<th className="px-6 py-4 text-lg font-semibold capitalize">Price</th>

								<th className="px-6 py-4 text-center text-lg font-semibold capitalize">Quantity</th>
								<th className="px-6 py-4 text-center text-lg font-semibold capitalize">Total Amount</th>
							</tr>
						</thead>
						{productOrderInfo.map((data: { title: string; price: string; quantity: number; image: string }) => (
							<OrderProductInfoRow title={data.title} price={data.price} quantity={data.quantity} image={data.image} />
						))}
					</table>
				</div>
			</div>
		</div>
	)
}

export default OrderProductInfo
