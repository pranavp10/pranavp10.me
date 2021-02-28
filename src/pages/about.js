import { BsCheckCircle } from 'react-icons/bs';

const About = () => (
  <div className="pt-32">
    <h1
      className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-center"
      data-aos="zoom-y-out">
      Hello! I'm Pranav,
    </h1>
    <div className="space-y-4">
      <div className="flex justify-center items-center">
        <div className="text-green-500 p-4">
          <BsCheckCircle />
        </div>
        <p className="text-gray-600 dark:text-gray-100" data-aos="zoom-y-out" data-aos-delay="150">
          A software engineer by passion but love solving problems and enjoy working on JavaScript,
          React and Design Systems(learning).
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-green-500 p-4">
          <BsCheckCircle />
        </div>
        <p className="text-gray-600 dark:text-gray-100" data-aos="zoom-y-out" data-aos-delay="150">
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
    </div>
  </div>
);

export default About;
