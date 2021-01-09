import { getTint } from '@/utils/getTint';
import PropTypes from 'prop-types';

export default function TimelineEntry({
  children = null,
  title,
  Icon,
  tint = 'gray',
}) {
  return (
    <div className="flex mb-12 md:mb-12 timeline-item">
      {/* Icon and dividing line */}
      <div className="flex flex-col items-center">
        <div
          className={`flex justify-center p-3 rounded-full align-center border-4 border-gray-50 ${getTint(
            tint
          )}`}
        >
          <Icon size={16} />
        </div>
      </div>
      <div className="flex flex-col flex-1 ml-4 space-y-2">
        <div className="flex flex-col contents-center">
          <span className="font-semibold text-primary">{title}</span>
        </div>
        <div className="flex flex-col space-y-4 timeline-full-width">
          {children}
        </div>
      </div>
    </div>
  );
}

TimelineEntry.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  Icon: PropTypes.node,
  tint: PropTypes.string,
};
