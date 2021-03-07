import Link from 'next/link';
import { Hero, SEO } from '@/components/utils';

const About = () => (
  <>
    <SEO BaseTitle="About Pranav | JavaScript, React, Design Systems." />
    <div className="pt-32">
      <h1 className="text-5xl font-black">About Me</h1>
      <ul className="list-inside list-disc">
        <li className="text-gray-600 dark:text-gray-100 my-4">
          I'm a frontend developer at <b>Q</b>
          uze which is going to effect millions of students
        </li>
        <li className="text-gray-600 dark:text-gray-100 my-4">
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
        </li>
        <li className="text-gray-600 dark:text-gray-100 my-4">
          A software engineer by passion, love solving problems and enjoy working on JavaScript,
          React and Design Systems(learning).
        </li>
        <li className="text-gray-600 dark:text-gray-100 my-4">
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
        </li>
        <li className="text-gray-600 dark:text-gray-100 my-4">
          I always right down all my{' '}
          <Link href="/learning">
            <a className="text-blue-500">learning Process</a>
          </Link>{' '}
          and share with the people so that it will help others to learn what I have learnt.
        </li>
      </ul>
    </div>
  </>
);

export default About;
