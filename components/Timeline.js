import { FcTouchscreenSmartphone } from 'react-icons/fc';
import DateEntry from './dateEntry';
import TimeLineEntry from './TimelineEntry';

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-10">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <DateEntry title="2013" />
      <TimeLineEntry
        title="My first smartphone"
        Icon={FcTouchscreenSmartphone}
        tint="yellow"
      >
        <p className="text-gray-700 dark:text-gray-400">
          I got my first smart phone at the age of 16{' '}
        </p>
      </TimeLineEntry>
    </div>
  );
}
