import React from 'react';
import '../styles/globals.scss';
import { Layout } from '../components';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <MessengerCustomerChat
        pageId="102453745271672"
        appId="387474772900051"
      />
    </Layout>
  );
}

export default MyApp;
