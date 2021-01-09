/* eslint-disable react/jsx-props-no-spreading */
import '../styles/index.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
MyApp.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };
export default MyApp;
