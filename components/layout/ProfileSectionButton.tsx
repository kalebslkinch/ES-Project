import Link from 'next/link'
import React, { ReactChild } from 'react'
const ProfileSectionButton = ({ children, title, link }: { children: any; title: string; link: string }) => {
	return (
		<div className="group pl-4 flex">
			{/* Order Icon */}
			{children}

			{/* Orders Links */}
			<Link href={link}>
				<div className="block cursor-pointer px-2 py-2 text-sm text-gray-800 " role="menuitem">
					{title}
				</div>
			</Link>
		</div>
	)
}

export default ProfileSectionButton
