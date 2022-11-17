import ProfileMenuButton from './ProfileMenuButton'
import React, { FC } from 'react'
import ShoppingBag from '../svg/ShoppingBag'
import UserCircle from '../svg/UserCircle'
import ProfileSection from './ProfileSection'
const NavbarEndButtons: FC<{
	toggleProfileMenu: () => void
	toggleShoppingBag: () => void
	openProfileMenu: boolean
	handleProfileClickAway: () => void
	icons: string
}> = ({ toggleProfileMenu, toggleShoppingBag, openProfileMenu, handleProfileClickAway, icons }) => {
	return (
		<div className="hidden md:block">
			{/* Profile */}
			<div className="ml-4 flex items-center space-x-2 md:ml-6">
				{/* User Profile Menu Button */}
				<ProfileMenuButton toggleMenu={toggleProfileMenu}>
					<UserCircle className="h-8 w-8 group-hover:animate-slowbounce" />
				</ProfileMenuButton>

				<ProfileMenuButton toggleMenu={toggleShoppingBag}>
					<ShoppingBag className="h-8 w-8 group-hover:animate-slowbounce" />
				</ProfileMenuButton>

				{openProfileMenu === true && <ProfileSection handleProfileClickAway={handleProfileClickAway} icons={icons} />}
			</div>
		</div>
	)
}

export default NavbarEndButtons
