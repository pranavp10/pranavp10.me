import { RoughNotation } from 'react-rough-notation';

const Who = () => (
  <div className="mt-8">
    <h4 className="font-semibold text-primary">Any thing new ?</h4>
    <h5
      className="text-md text-gray-700 dark:text-gray-400 mb-8"
      data-aos="zoom-y-out"
      data-aos-delay="150">
      I am always starving to try out new things so{' '}
      <RoughNotation type="highlight" show color="#bfbfbf">
        <a target="_blank" rel="noopener noreferrer" href="mailto:pranavkp.me@outlook.com">
          <b>mail me</b>
        </a>
      </RoughNotation>
      , let's discuss and will try to add it in the list.
    </h5>
  </div>
);
export default Who;
