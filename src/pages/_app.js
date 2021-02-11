import '@/styles/nprogress.css';
import '@/styles/globals.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import DefaultSEO from '@/utils/next-seo.config';
import { Container } from '@/components/layouts';
import { NavBar, Footer } from '@/components/utils';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...DefaultSEO} />
      <NavBar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;
