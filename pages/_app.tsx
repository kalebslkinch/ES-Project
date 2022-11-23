import NavBar from '../components/layout/NavBar'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import { wrapper } from '../redux/store'
import { NextPage } from 'next'

const App: NextPage<any> = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<SessionProvider session={session}>
			<NavBar />
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default wrapper.withRedux(App)
