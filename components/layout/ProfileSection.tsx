import Link from 'next/link'
import ClickAwayListener from 'react-click-away-listener'
import User from '../svg/User'
import Heart from '../svg/Heart'
import Logout from '../svg/Logout'
import Login from '../svg/Login'
import { FC, ReactChild } from 'react'

const ProfileSection: FC<{
	handleProfileClickAway: () => void
	user: boolean
	icons: ReactChild
}> = ({ handleProfileClickAway, user, icons }) => {
	return (
		<ClickAwayListener onClickAway={handleProfileClickAway}>
			<div
				className="absolute right-0 top-12 z-40 w-40  animate-fadein rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 duration-700 ease-in"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="user-menu"
			>
				{user && (
					<>
						<div className="group pl-4 flex">
							{/* Profile Icon */}
							<User className="h-6 w-6 group-hover:animate-slowbounce" />

							{/* Profile Link */}
							<Link href="/my-profile">
								<span className=" block cursor-pointer px-2 py-2 text-sm text-gray-800 " role="menuitem">
									Your Profile
								</span>
							</Link>
						</div>

						<div className="group pl-4 flex">
							{/* Order Icon */}
							<Heart className="h-6 w-6 group-hover:animate-slowbounce" />

							{/* Orders Links */}
							<Link href="/orders">
								<div className="block cursor-pointer px-2 py-2 text-sm text-gray-800 " role="menuitem">
									Orders
								</div>
							</Link>
						</div>
					</>
				)}
				{!user ? (
					<>
						<div className="group pl-4 flex">
							{/* Login Icon */}
							<Login className={icons} />

							{/* Login Link */}
							<Link href="/login">
								<div className="block cursor-pointer px-4   py-2 text-sm text-gray-700 " role="menuitem">
									Login
								</div>
							</Link>
						</div>
					</>
				) : (
					<div className="group pl-4 flex">
						{/* Logout Icon */}
						<Logout className={icons} />

						{/* Logout Link */}
						<Link href="/logout">
							<div className="block cursor-pointer px-2 py-2 text-sm text-gray-700 " role="menuitem">
								Logout
							</div>
						</Link>
					</div>
				)}
			</div>
		</ClickAwayListener>
	)
}

export default ProfileSection
