import React, { useEffect } from 'react'
// import Truck from '../components/svg/Truck'
// import { useRouter } from 'next/router'
// import TransitionScaleIn from '../components/transitions/TransitionScaleIn'
// import TransitionOpac from '../components/transitions/TransitionOpac'
// import Image from 'next/image'
// import User from '../components/svg/User'
// import { Row } from '../components/EasyComponents/Flex'
// import { useSession } from 'next-auth/react'

const MyProfile = () => {
	return <></>
}
// 	const router = useRouter()

// 	const isAuthenticated = useSession().status === 'authenticated'

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push('/')
//     }
//   }, [isAuthenticated])

// 		// Router

// 		// Refresh Router
// 		const refreshData = () => {
// 			router.replace(router.asPath)
// 		}

// 		const bgImages = [
// 			'https://images.pexels.com/photos/2878740/pexels-photo-2878740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// 			'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// 			'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// 			'https://images.pexels.com/photos/1346382/pexels-photo-1346382.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
// 			'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// 			'https://images.pexels.com/photos/5469044/pexels-photo-5469044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// 			'https://images.pexels.com/photos/2872882/pexels-photo-2872882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// 		]

// 		const randomValue = list => {
// 			return list[Math.floor(Math.random() * list.length)]
// 		}

// 		const bgImage = randomValue(bgImages)

// 		return (
// 			<>
// 				<div className="align-center flex h-[92vh] w-screen justify-center">
// 					<div className="-mbg-gray-800 mx-auto mt-10 w-[600px] animate-fadein overflow-hidden rounded-lg bg-white   md:my-auto md:w-[500px]">
// 						<TransitionScaleIn>
// 							<div className="h-56">
// 								<button
// 									className="relative h-56 w-full cursor-default p-0 focus:bg-transparent focus:outline-none"
// 									onDoubleClick={() => refreshData()}
// 								>
// 									<TransitionOpac>
// 										<Image
// 											className="a h-60 w-full object-cover object-center"
// 											src={bgImage}
// 											alt="avatar"
// 											objectFit="cover"
// 											layout="fill"
// 										/>
// 									</TransitionOpac>
// 								</button>
// 							</div>
// 							<Row className=" items-center bg-gray-900 py-2">
// 								<User className="ml-5 h-6 w-6 fill-white" />

// 								<h1 className="mx-2 text-lg font-semibold text-white">Profile</h1>
// 							</Row>

// 							<div className="px-6 py-3">
// 								<h1 className="-mtext-white mt-2 pb-1 text-xl  font-semibold text-gray-800">{user.name}</h1>

// 								<div className="-mtext-gray-200 mt-2 flex items-center  text-gray-700">
// 									<svg
// 										className="h-6 w-6 fill-current"
// 										viewBox="0 0 24 24"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path d="M14 11H10V13H14V11Z" />
// 										<path
// 											fill-rule="evenodd"
// 											clip-rule="evenodd"
// 											d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
// 										/>
// 									</svg>

// 									<h1 className="px-2 text-sm">Customer</h1>
// 								</div>

// 								<div className="-mtext-gray-200 mt-4 flex items-center  text-gray-700">
// 									<svg
// 										className="h-6 w-6 fill-current"
// 										viewBox="0 0 24 24"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											fill-rule="evenodd"
// 											clip-rule="evenodd"
// 											d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
// 										/>
// 									</svg>

// 									<h1 className="px-2 text-sm">{user.email}</h1>
// 								</div>
// 								<div className="-mtext-gray-200 mt-4 flex items-center  text-gray-700">
// 									<Truck className="h-6 w-6" />

// 									<h1 className="px-2 text-sm">{`Outstanding: ${newOrdersLengthAmount}`}</h1>
// 									<h1 className="px-2 text-sm">{`Completed: ${shippedOrdersAmount}`}</h1>
// 								</div>
// 							</div>
// 						</TransitionScaleIn>
// 					</div>
// 				</div>
// 			</>
// 		)
// 	} else return <></>
// }

export default MyProfile
