import Image from 'next/image';
import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { DiVisualstudio } from 'react-icons/di';

const Card = ({ name, background, description, githubLink, imgUrl, marketplace, website }) => (
  <div className="border border-white rounded-md shadow-md hover:shadow-xl transition duration-200 ease-in-out cursor-pointer transform hover:scale-105 motion-reduce:transform-none w-full">
    <div className="h-16 rounded-t-md" style={{ background }} />
    <div className="m-auto flex justify-center -mt-8">
      <div className="bg-white dark:bg-gray-900  p-3 rounded-full ">
        <Image src={imgUrl} width={40} height={40} />
      </div>
    </div>
    <div className="text-center  -mt-2 px-4 pb-4">
      <p className="font-semibold text-primary">{name}</p>
      <p className="text-gray-700 dark:text-gray-400 line-clamp-2">{description}</p>
      <div className="flex justify-center space-x-2 mt-2">
        {website && (
          <a
            href={website}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer">
            <FiExternalLink size={15} />
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer">
            <AiFillGithub size={15} />
          </a>
        )}
        {marketplace && (
          <a
            href={marketplace}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer">
            <DiVisualstudio size={15} />
          </a>
        )}
      </div>
    </div>
  </div>
);
Card.propTypes = {
  name: PropTypes.string,
  background: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  marketplace: PropTypes.string,
  imgUrl: PropTypes.string,
  website: PropTypes.string,
};
export default Card;
