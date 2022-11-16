import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import Google from '../svg/Google'
const AuthLayout: FC<{ type: 'signup' | 'login' }> = ({ type }) => {
	return (
		<div className="flex items-center justify-center h-[90vh]">
			<div className="flex flex-col items-center justify-center border w-96 h-[400px] rounded-lg shadow-md">
				{/* Logo Icon */}
				<div className="flex  flex-col items-center justify-center h-28 w-28 relative">
					<Image src="/Exotic_snax.jpg" alt="logo" layout="fill" objectFit="cover" />
				</div>

				<>
					<>
						<h1 className="mt-8 mr-6 text-gray-900">
							{type === 'signup' ? 'Signup' : 'Login'} with one of the options below
						</h1>
						{/* Google Button */}
						<button
							className="flex group text-black rounded-full bg-white transition transform duration-300 hover:bg-gray-900 hover:text-white h-12 w-[80%] mt-3 mb-3 border border-black items-center  "
							onClick={() => signIn('google')}
						>
							<Google className="group-hover:fill-white fill-gray-900 ml-6 h-6 w-6" />{' '}
							<span className="text-xl ml-5 font-medium">Continue with Google</span>
						</button>

						{/* Twitter Button */}
						<button
							onClick={() => signIn('twitter')}
							className="flex rounded-full h-12 w-[80%] mb-3 text-black border border-black items-center bg-white transition transform duration-300 hover:bg-gray-900 hover:text-white"
						>
							<div className="relative flex ml-6 h-6 w-6">
								<Image src="/twitterblue.svg" alt="logo" layout="fill" objectFit="cover" />
							</div>
							<span className=" text-xl ml-5 font-medium">Continue with Twitter</span>
						</button>
					</>

					{/* Sign Up */}
					<span className="flex ml-auto mt-2 mr-12 text-sm text-black">
						{`${type === 'signup' ? 'Already' : `Don't`} have an account? `}
						<Link href="/signup">
							<a className="text-main ml-1">Sign up</a>
						</Link>
					</span>
				</>
			</div>
		</div>
	)
}
export default AuthLayout
