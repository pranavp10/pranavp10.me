/* eslint-disable no-sparse-arrays */
import PropTypes from 'prop-types';

const ListContainer = ({ children, heading }) => (
  <div className="mt-8">
    <div className="font-semibold text-primary">{heading}</div>
    <div className="sm:grid justify-start sm:grid-cols-2 sm:gap-4 flex flex-col sm:space-y-0 space-y-4">
      {children}
    </div>
  </div>
);
ListContainer.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};
export default ListContainer;
