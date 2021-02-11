import { FaLaptopCode, FaGraduationCap, FaMobileAlt, FaCode } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';
import DateEntry from './dateEntry';
import TimeLineEntry from './timelineEntry';

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-10">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <DateEntry title="2019" />
      <TimeLineEntry title="Joined Tulasi Technologies" Icon={FaCode} tint="blue">
        <p className="text-gray-700 dark:text-gray-400">
          Worked as a software Engineer and learnt lots of things during this phase
        </p>
      </TimeLineEntry>
      <TimeLineEntry title="Graduation Year" Icon={FaGraduationCap} tint="gray">
        <p className="text-gray-700 dark:text-gray-400">
          I was really fascinated with my smartphone and then took the compute science as my course
        </p>
      </TimeLineEntry>
      <TimeLineEntry title="Offer Letter" Icon={IoNewspaper} tint="green">
        <p className="text-gray-700 dark:text-gray-400">
          I was place in the college and was really happy because it was my first offer latter as{' '}
          <b>Software Engineer</b>
        </p>
      </TimeLineEntry>
      <DateEntry title="2015" />
      <TimeLineEntry title="Joined Engineering Collage" Icon={FaLaptopCode} tint="gray">
        <p className="text-gray-700 dark:text-gray-400">
          I was really fascinated with my smartphone and then took the compute science as my course
        </p>
      </TimeLineEntry>
      <DateEntry title="2013" />
      <TimeLineEntry title="My first smartphone" Icon={FaMobileAlt} tint="purple">
        <p className="text-gray-700 dark:text-gray-400">
          I got my first smart phone at the age of 16{' '}
        </p>
      </TimeLineEntry>
    </div>
  );
}
