import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
const NavbarLogo: FC = () => {
	return (
		<div className="w-1/8 flex h-full items-center ">
			<button className="flex focus:outline-none ">
				<Link href="/">
					<Image src="/Exotic_snax.jpg" alt="Logo" height={48} width={48} />
				</Link>
			</button>
		</div>
	)
}

export default NavbarLogo
