import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import Layout from '../components/layouts/default'
import '../styles.css'

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
    cookieStorage: {
      domain: process.env.AUTH_COOKIE_DOMAIN,
      path: "/",
      expires: 7,
      secure: false,
    },
  },
});

Auth.configure({
  oauth: {
    domain: process.env.IDP_DOMAIN,
    scope: ["email", "openid"],
    redirectSignIn: process.env.REDIRECT_SIGN_IN,
    redirectSignOut: process.env.REDIRECT_SIGN_OUT,
    responseType: "token",
  },
});

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}
