import NavBar from '../components/layout/NavBar'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import { AppType } from 'next/app'
import { wrapper } from '../redux/store'

const App: AppType = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<SessionProvider session={session}>
			<NavBar />
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default wrapper.withRedux(App)
