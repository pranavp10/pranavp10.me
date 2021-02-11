import Router from 'next/router';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import { useTheme } from 'next-themes';

const Container = ({ children }) => {
  const { theme } = useTheme();

  NProgress.configure({
    showSpinner: false,
    template: `<div class=${theme === 'light' ? 'barDark' : 'barLight'} role="bar"><div class=${
      theme === 'light' ? 'pegDark' : 'pegLight'
    }></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`,
  });

  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <div className="minHightResize relative">
      <main className="max-w-3xl mx-auto px-6">{children}</main>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
