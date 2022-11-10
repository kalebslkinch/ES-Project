import Link from 'next/link'
import React, { FC } from 'react'
import ShoppingSection from './ShoppingSection'
const NavigationButtons: FC<{
	topButtonsStyle: string
	topButtonsLinkStyle: string
	transition: string
	toggleOnShop: () => void
	handleCloseAll: () => void
	handleShoppingClickAway: () => void
	openShop: boolean
}> = ({
	topButtonsStyle,
	topButtonsLinkStyle,
	transition,
	toggleOnShop,
	handleCloseAll,
	handleShoppingClickAway,
	openShop
}) => {
	return (
		<div className="mx-auto flex flex-row justify-center">
			{/* Home */}
			<button className={topButtonsStyle} onClick={handleCloseAll}>
				<Link href="/">
					<div className={topButtonsLinkStyle}>Home</div>
				</Link>
			</button>

			{/* Shopping */}
			<div className={`topButtonsLinkStyle ${transition} `}>
				<ShoppingSection
					topButtonsStyle={topButtonsStyle}
					toggleOnShop={toggleOnShop}
					topButtonsLinkStyle={topButtonsLinkStyle}
					openShop={openShop}
					handleShoppingClickAway={handleShoppingClickAway}
				/>
			</div>

			{/* Contact Us */}
			<button className={topButtonsStyle} onClick={handleCloseAll}>
				<Link href="/contact-us">
					<div className={topButtonsLinkStyle}>Contact us</div>
				</Link>
			</button>
		</div>
	)
}

export default NavigationButtons
