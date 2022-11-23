import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const TwitterAuth = () => {
	const router = useRouter()
	const isAuthenticated = useSession().status === 'authenticated'

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/')
		}
	}, [isAuthenticated])

	return <></>
}

export default TwitterAuth
