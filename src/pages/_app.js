import '@/styles/nprogress.css';
import '@/styles/globals.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import DefaultSEO from '@/utils/next-seo.config';
import { Container } from '@/components/layouts';
import { NavBar, Footer } from '@/components/utils';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/blog/MDXComponents';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const noNav = ['/login'];
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...DefaultSEO} />
      <MDXProvider components={MDXComponents}>
        {noNav.includes(pathname) ? null : <NavBar />}
        <Container>
          <Component {...pageProps} />
        </Container>
        {noNav.includes(pathname) ? null : <Footer />}
      </MDXProvider>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;
