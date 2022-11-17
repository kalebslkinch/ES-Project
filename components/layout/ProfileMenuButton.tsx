import React, { FC, ReactChild } from 'react'
const ProfileMenuButton: FC<{ children: ReactChild; toggleMenu: () => void }> = ({ children, toggleMenu }) => {
	return (
		<div className="group">
			{/* Menu Button */}
			<button onClick={toggleMenu} className="rounded-full p-1 focus:outline-none">
				{/*  Menu Icon */}
				{children}
			</button>
		</div>
	)
}

export default ProfileMenuButton
