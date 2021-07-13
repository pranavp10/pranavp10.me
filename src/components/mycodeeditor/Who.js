import { RoughNotation } from 'react-rough-notation';

const Who = () => (
  <div className="mt-8">
    <h4 className="font-semibold text-primary">Any Problem?</h4>
    <h5
      className="text-md text-gray-700 dark:text-gray-400 mb-8"
      data-aos="zoom-y-out"
      data-aos-delay="150">
      Check out my Github Gist, if you still face any problem downloading the settings?
      <a target="_blank" rel="noopener noreferrer" href="mailto:pranavkp.me@outlook.com">
        <RoughNotation type="highlight" show color="#91a7ef">
          <b>mail me</b>
        </RoughNotation>
      </a>
      , let's discuss and will try to help you out.
    </h5>
  </div>
);
export default Who;
