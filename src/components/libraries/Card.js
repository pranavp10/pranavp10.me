import PropTypes from 'prop-types';
import Image from 'next/image';

const Card = ({ githubLink, website, name, path, tried }) => (
  <div className="flex flex-wrap justify-center w-full">
    <div className="p-2 border border-white rounded-md shadow-md hover:shadow-xl transition duration-200 ease-in-out cursor-pointer transform hover:scale-105 motion-reduce:transform-none w-full">
      <div className="items-center flex space-x-4">
        {path ? (
          <Image className="rounded-full hover:p-2" src={`/${path}`} width={40} height={40} />
        ) : (
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <div className="flex flex-col space-y-1">
          <div className="flex justify-center items-center space-x-1">
            <p className="font-semibold text-primary">{name}</p>
            <div>
              {tried ? (
                <div className="text-green-500 dark:text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div className="text-red-500 dark:text-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="flex space-x-2">
            {githubLink && (
              <a
                href={githubLink}
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer">
                <span className="sr-only">github link</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            {website && (
              <a
                href={website}
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer">
                <span className="sr-only">website link</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
Card.propTypes = {
  githubLink: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string,
  path: PropTypes.string,
  tried: PropTypes.bool,
};
export default Card;
