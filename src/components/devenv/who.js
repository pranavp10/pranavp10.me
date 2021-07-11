import { RoughNotation } from 'react-rough-notation';

// export const LIGHT_COLORS = ['#A7F3D0', '#BAE6FD', '#C7D2FE', '#FDE68A'];

const Who = () => (
  <div className="mt-8">
    <h4 className="font-semibold text-primary">Any thing new ?</h4>
    <h5
      className="text-md text-gray-700 dark:text-gray-400 mb-8"
      data-aos="zoom-y-out"
      data-aos-delay="150">
      I am always starving to try out new things so{' '}
      <RoughNotation type="highlight" show color="#BAE6FD">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:pranavkp.me@outlook.com?subject=libraries.now.sh&body=package%20name%3A-%0D%0Agithub%20link%3A-%0D%0Awebsite%3A-">
          mail me
        </a>
      </RoughNotation>
      , let's discuss and will try to add it in the list.
    </h5>
  </div>
);
export default Who;