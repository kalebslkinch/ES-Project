import ProfileSectionButton from './ProfileSectionButton'
import Link from 'next/link'
import ClickAwayListener from 'react-click-away-listener'
import User from '../svg/User'
import Heart from '../svg/Heart'
import Logout from '../svg/Logout'
import Login from '../svg/Login'
import { FC, ReactChild } from 'react'
import { useSession } from 'next-auth/react'

const ProfileSection: FC<{
	handleProfileClickAway: () => void
	icons: ReactChild
}> = ({ handleProfileClickAway, icons }) => {
	const isAuthenticated = useSession().status === 'authenticated'

	return (
		<ClickAwayListener onClickAway={handleProfileClickAway}>
			<div
				className="absolute right-0 top-12 z-40 w-40  animate-fadein rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 duration-700 ease-in"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="user-menu"
			>
				{isAuthenticated && (
					// <>
					// 	{/* My Profile Button */}
					// 	<ProfileSectionButton title="My profile" link="/my-profile">
					// 		<User className="h-6 w-6 group-hover:animate-slowbounce" />
					// 	</ProfileSectionButton>

					// 	{/* Orders Button */}
					// 	<ProfileSectionButton title="Orders" link="/orders">
					// 		<Heart className="h-6 w-6 group-hover:animate-slowbounce" />
					// 	</ProfileSectionButton>
					// </>
					<></>
				)}
				<>
					{/* Orders Button */}
					<ProfileSectionButton
						title={isAuthenticated ? 'Logout' : 'Login'}
						link={isAuthenticated ? '/logout' : '/login'}
					>
						<> {isAuthenticated ? <Logout className={icons} /> : <Login className={icons} />}</>
					</ProfileSectionButton>
				</>
			</div>
		</ClickAwayListener>
	)
}

export default ProfileSection
