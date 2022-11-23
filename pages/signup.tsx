import AuthLayout from './../components/auth/AuthLayout'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Signup: NextPage = () => {
	const router = useRouter()
	const isAuthenticated = useSession().status === 'authenticated'

	// Checks if user is authenticated and redirects to home page
	useEffect(() => {
		if (isAuthenticated) {
			router.push('/')
		}
	}, [isAuthenticated])

	return <AuthLayout type="signup" />
}

export default Signup
