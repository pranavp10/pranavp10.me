import PropType from 'prop-types';
import { RoughNotation } from 'react-rough-notation';

const Hero = ({ title, description, button, color }) => (
  <div className="pt-32">
    <div className="text-center">
      <h1
        className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
        data-aos="zoom-y-out">
        <RoughNotation type="highlight" show color={color || '#BAE6FD'}>
          {title}
        </RoughNotation>
      </h1>
      <h2
        className="text-md text-gray-600 mb-8 dark:text-gray-100 max-w-xl mx-auto"
        data-aos="zoom-y-out"
        data-aos-delay="150">
        {description}
      </h2>
    </div>
    {button && (
      <div className="px-4 flex mb-4 text-sm font-medium justify-center h-10">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={button.href}
          className="flex items-center justify-center rounded-md dark:bg-white dark:text-black bg-black text-white px-5">
          {button.name}
        </a>
      </div>
    )}
  </div>
);
Hero.propTypes = {
  title: PropType.string,
  description: PropType.string,
  button: PropType.object,
  color: PropType.string,
};
export default Hero;
