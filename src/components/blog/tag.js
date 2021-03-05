import Link from 'next/link';
import PropTypes from 'prop-types';

const Tag = ({ text }) => (
  <Link href="/tags">
    <a className="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400">
      {text.split(' ').join('-')}
    </a>
  </Link>
);
Tag.propTypes = {
  text: PropTypes.string,
};
export default Tag;
