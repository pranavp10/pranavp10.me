import Link from 'next/link';
import { BsCheckCircle } from 'react-icons/bs';

const About = () => (
  <div className="pt-32">
    <h1 className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-center">
      👋 I'm Pranav,
    </h1>
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="text-green-500 p-4">
          <BsCheckCircle />
        </div>
        <p className="text-gray-600 dark:text-gray-100">
          I'm a frontend developer at <b>Q</b>
          uze which is going to effect millions of students
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-green-500 p-4">
          <BsCheckCircle />
        </div>
        <p className="text-gray-600 dark:text-gray-100">
          Current Technology I am working on{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500">
            Next js (The React Framework)
          </a>{' '}
          and{' '}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500">
            Tailwind css
          </a>{' '}
          and check out the list of{' '}
          <a
            href="https://libraries.pranavp10.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500">
            Framework and Libraries
          </a>{' '}
          I have used till now.
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-green-500 p-4">
          <BsCheckCircle />
        </div>
        <p className="text-gray-600 dark:text-gray-100">
          A software engineer by passion, love solving problems and enjoy working on JavaScript,
          React and Design Systems(learning).
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-green-500 p-4">
          <BsCheckCircle />
        </div>
        <p className="text-gray-600 dark:text-gray-100">
          Contribute to the open source project like{' '}
          <a
            href="https://github.com/searchkit/searchkit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500">
            @searchkit
          </a>
          ,{' '}
          <a
            href="https://github.com/LoginRadius/engineering-portal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500">
            @LoginRadius
          </a>{' '}
          and planing to contribute to more open source project in the feature
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-green-500 p-4">
          <BsCheckCircle />
        </div>
        <p className="text-gray-600 dark:text-gray-100">
          I always right down all my{' '}
          <Link href="/learning">
            <a className="text-blue-500">learning Process</a>
          </Link>{' '}
          and share with the people so that it will help others to learn what I have learnt.
        </p>
      </div>
    </div>
  </div>
);

export default About;
