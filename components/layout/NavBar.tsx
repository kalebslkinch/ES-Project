import NavbarEndButtons from './NavbarEndButtons'
import NavigationButtons from './NavigationButtons'
import MobileShoppingCart from './MobileShoppingCart'
import MobileNavbarLogo from './MobileNavbarLogo'
import NavbarLogo from './NavbarLogo'
import React, { FC, useState } from 'react'
import MobileMenu from './MobileMenu'
import { FSRow } from '../EasyComponents/FScreen'

// Styles
const icons: string = 'group-hover:animate-bounce w-6 w-6'
const transition: string = 'transition  duration-1000 delay-100 ease-in-out  transform  hover:scale-110'
const topButtonsStyle: string = `rounded-md px-6 py-1 text-gray-800 focus:outline-none   ${transition}  bg-gradient-to-r  hover:from-pink-400 hover:via-green-300 hover:to-blue-400`
const topButtonsLinkStyle: string = 'text-gray-800 text-lg '

const NavBar: FC = () => {
	// Temporary User
	const user: boolean = false

	// States
	const [openShop, setOpenShop] = useState<boolean>(false)
	const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false)
	const [openShoppingBag, setOpenShoppingBag] = useState<boolean>(false)

	// Event Listeners

	// Handle Click away
	const handleProfileClickAway = (): void => {
		setOpenProfileMenu(false)
	}

	// Close the shopping bag
	const handleShoppingClickAway = (): void => {
		setOpenShop(false)
	}

	// Toggle the Shop Menu
	const toggleOnShop = (): void => {
		setOpenShop(prev => !prev)
		setOpenProfileMenu(false)
		setOpenShoppingBag(false)
	}

	// Toggle the Profile Menu
	const toggleProfileMenu = (): void => {
		setOpenProfileMenu(prev => !prev)
		setOpenShop(false)
		setOpenShoppingBag(false)
	}

	// Toggle the Shopping Bag closed and open
	const toggleShoppingBag = (): void => {
		setOpenShoppingBag(prev => !prev)
		setOpenProfileMenu(false)
		setOpenShop(false)
	}

	// Close all the menus
	const handleCloseAll = (): void => {
		setOpenShoppingBag(false)
		setOpenProfileMenu(false)
		setOpenShop(false)
	}

	return (
		<FSRow className="z-50">
			<nav className="flex flex-row justify-center bg-white py-2">
				<div className="w-screen sm:px-4 ">
					<div className="flex h-8 items-center justify-between ">
						<div className="flex  w-full items-center">
							<div className="hide-mobile max w-full md:block">
								<div className="ml-6 flex w-full items-center">
									{/* Logo */}
									<NavbarLogo />

									{/* Navigation Buttons */}
									<NavigationButtons
										topButtonsStyle={topButtonsStyle}
										handleCloseAll={handleCloseAll}
										topButtonsLinkStyle={topButtonsLinkStyle}
										transition={transition}
										toggleOnShop={toggleOnShop}
										openShop={openShop}
										handleShoppingClickAway={handleShoppingClickAway}
									/>
								</div>
							</div>

							{/* End Buttons */}
							<NavbarEndButtons
								toggleProfileMenu={toggleProfileMenu}
								toggleShoppingBag={toggleShoppingBag}
								openProfileMenu={openProfileMenu}
								handleProfileClickAway={handleProfileClickAway}
								user={user}
								icons={icons}
							/>
						</div>

						{/* Mobile Navigation */}
						<FSRow className="hide absolute z-40 justify-center">
							{/* Mobile Logo */}
							<MobileNavbarLogo />

							{/* Mobile Menu */}
							<MobileMenu />
						</FSRow>
					</div>
				</div>
			</nav>

			{/* Open Shopping Bag */}
			{openShoppingBag && <MobileShoppingCart toggleShoppingBag={toggleShoppingBag} />}
		</FSRow>
	)
}

export default NavBar
