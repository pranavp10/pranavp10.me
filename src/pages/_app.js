import '@/styles/nprogress.css';
import '@/styles/globals.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import DefaultSEO from '@/utils/next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...DefaultSEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;
