import NavBar from '../components/layout/NavBar';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <ApolloProvider client={client}>
        <NavBar />
        <Component {...pageProps}  
        // Replace with nextAuth signout 
        // logout={logout}
         />
      </ApolloProvider>
    </>
  );
};

export default MyApp;
