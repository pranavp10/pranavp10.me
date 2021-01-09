import PropTypes from 'prop-types';

export default function DateEntry({ title }) {
  return (
    <div className="flex items-center mt-4 mb-8 timeline-item">
      <p className="text-lg font-bold">{title}</p>
      <div className="flex-1 h-px ml-4 bg-gray-200 dark:bg-gray-800 timeline-stroke" />
    </div>
  );
}

DateEntry.propTypes = {
  title: PropTypes.string,
};
