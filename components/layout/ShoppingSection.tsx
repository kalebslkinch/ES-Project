import Link from 'next/link'
import { FC } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import Boxes from '../svg/Boxes'
import Down from '../svg/Down'
import Sweets from '../svg/Sweets'
import Up from '../svg/Up'

const ShoppingSection: FC<{
	topButtonsStyle: string
	topButtonsLinkStyle: string
	handleShoppingClickAway: () => void
	toggleOnShop: () => void
	openShop: boolean
}> = ({ topButtonsStyle, toggleOnShop, topButtonsLinkStyle, openShop, handleShoppingClickAway }) => {
	return (
		<ClickAwayListener onClickAway={handleShoppingClickAway}>
			{/* Shop Menu Button */}
			<button className={`${topButtonsStyle}`} onClick={toggleOnShop}>
				{/* Title */}
				<span className={`flex justify-center ${topButtonsLinkStyle} `}>
					Shopping
					<div className="flex pt-2">
						{!openShop ? (
							// Up Icon
							<Up className="h-3 w-3 animate-otherhalfspin" />
						) : (
							// Down Icon
							<Down className="h-3 w-3 animate-halfspin" />
						)}
					</div>
				</span>

				{/* Shopping Menu */}
				<div
					className={
						!openShop
							? 'hidden'
							: 'absolute z-40 mt-2 w-40 rounded-md bg-white py-1 shadow-2xl ring-1 ring-black ring-opacity-5'
					}
					role="menu"
					aria-orientation="vertical"
				>
					<div className="group flex pl-4 animate-fadein">
						{/* Sweets Icon */}
						<Sweets className="h-8 w-8 group-hover:animate-bounce" />

						{/* Products Link */}
						<div className="cursor-pointer px-2 py-2 text-sm text-gray-700">
							<Link href="/shopping">Products</Link>
						</div>
					</div>

					<div className="group pl-4 flex animate-fadein">
						{/* Snackbox Icon */}
						<Boxes className="h-8 w-8 group-hover:animate-bounce" />

						{/* Snackbox Link  */}
						<Link href="/snackbox">
							<div className=" cursor-pointer px-2 py-2 text-sm text-gray-700">Snack Boxes</div>
						</Link>
					</div>
				</div>
			</button>
		</ClickAwayListener>
	)
}

export default ShoppingSection
