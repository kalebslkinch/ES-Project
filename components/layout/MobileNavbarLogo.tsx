import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const MobileNavbarLogo: FC = () => {
	return (
		<button className="mx-auto mt-1 w-screen pl-12 focus:outline-none">
			<Link href="/">
				<Image src="/Exotic_snax.jpg" alt="Picture of the author" width={50} height={50} />
			</Link>
		</button>
	)
}

export default MobileNavbarLogo
