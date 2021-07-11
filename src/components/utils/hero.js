import PropType from 'prop-types';

const Hero = ({ title, description }) => (
  <div className="pt-32">
    <div className="text-center">
      <h1
        className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
        data-aos="zoom-y-out">
        {title}
      </h1>
      <h2
        className="text-md text-gray-600 mb-8 dark:text-gray-100"
        data-aos="zoom-y-out"
        data-aos-delay="150">
        {description}
      </h2>
    </div>
  </div>
);
Hero.propTypes = {
  title: PropType.string,
  description: PropType.string,
};
export default Hero;
