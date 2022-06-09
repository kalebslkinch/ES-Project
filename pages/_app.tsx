import NavBar from '../components/layout/NavBar';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { useUser } from '../lib/firebase/useUser';

const MyApp = ({ Component, pageProps }) => {
  const { user, logout } = useUser();
  return (
    <>
      <ApolloProvider client={client}>
        <NavBar />
        <Component {...pageProps} user={user} logout={logout} />
      </ApolloProvider>
    </>
  );
};

export default MyApp;
