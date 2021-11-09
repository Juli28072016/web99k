import React from 'react';
import '../styles/globals.scss';
import { Layout } from '../components';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div className="transition duration-500 ease transform hover:-translate-y-1">
        <MessengerCustomerChat
          pageId="102453745271672"
          appId="387474772900051"
        />
      </div>
    </Layout>
  );
}

export default MyApp;
