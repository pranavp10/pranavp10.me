import PropTypes from 'prop-types';

const Tag = ({ text }) => (
  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
    {text.split(' ').join('-')}
  </span>
);
Tag.propTypes = {
  text: PropTypes.string,
};
export default Tag;
