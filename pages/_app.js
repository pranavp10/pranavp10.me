/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/index.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
MyApp.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };
export default MyApp;
