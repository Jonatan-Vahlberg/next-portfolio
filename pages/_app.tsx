import React, { useEffect, Fragment } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
