import '@/styles/nprogress.css';
import '@/styles/globals.css';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;
