import React, { FC } from 'react'
import ShoppingCart from '../shoppingcart/ShoppingCart'
const MobileShoppingCart: FC<{ toggleShoppingBag: () => void }> = ({ toggleShoppingBag }) => {
	return (
		<>
			<div className="absolute top-12 right-[258px]">
				<ShoppingCart toggleShoppingBag={toggleShoppingBag} />
				<div className="pr-1" />
			</div>
		</>
	)
}

export default MobileShoppingCart
