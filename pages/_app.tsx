import NavBar from '../components/layout/NavBar'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
