import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import AuthLayout from '../components/auth/AuthLayout'

const Login: NextPage = () => {
	const router = useRouter()
	const isAuthenticated = useSession().status === 'authenticated'

	// Checks if user is authenticated and redirects to home page
	useEffect(() => {
		if (isAuthenticated) {
			router.push('/')
		}
	}, [isAuthenticated])

	return <AuthLayout type="login" />
}

export default Login
