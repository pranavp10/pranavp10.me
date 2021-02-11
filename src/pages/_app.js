import '@/styles/nprogress.css';
import '@/styles/globals.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import DefaultSEO from '@/utils/next-seo.config';
import { Container } from '@/components/layouts';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...DefaultSEO} />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;
