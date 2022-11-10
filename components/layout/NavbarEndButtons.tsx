import React, { FC } from 'react'
import ShoppingBag from '../svg/ShoppingBag'
import UserCircle from '../svg/UserCircle'
import ProfileSection from './ProfileSection'
const NavbarEndButtons: FC<{
	toggleProfileMenu: () => void
	toggleShoppingBag: () => void
	openProfileMenu: boolean
	handleProfileClickAway: () => void
	user: boolean
	icons: string
}> = ({ toggleProfileMenu, toggleShoppingBag, openProfileMenu, handleProfileClickAway, user, icons }) => {
	return (
		<div className="hidden md:block">
			{/* Profile */}
			<div className="ml-4 flex items-center space-x-2 md:ml-6">
				<div className="group">
					{/* Profile Menu Button */}
					<button onClick={toggleProfileMenu} className="rounded-full p-1 focus:outline-none">
						{/* Profile Menu Button */}
						<UserCircle className="h-8 w-8 group-hover:animate-slowbounce" />
					</button>
				</div>

				<div className="group">
					{/* Shopping Bag Menu Button */}
					<button onClick={toggleShoppingBag} className="rounded-full  p-1  focus:outline-none">
						{/* Shopping Bag Icon */}
						<ShoppingBag className="h-8 w-8 group-hover:animate-slowbounce" />
					</button>
				</div>

				{openProfileMenu === true ? (
					<ProfileSection handleProfileClickAway={handleProfileClickAway} user={user} icons={icons} />
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

export default NavbarEndButtons
