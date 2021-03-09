import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

const Footer = () => (
  <footer>
    <div className="max-w-3xl mx-auto px-6">
      <div className="md:flex md:items-center md:justify-between py-4 border-t border-gray-200">
        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/pranav-p-241914183"
              className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-full  transition duration-150 ease-in-out"
              aria-label="Twitter">
              <AiFillLinkedin size="22px" />
            </a>
          </li>
          <li className="ml-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ThatsPranav"
              className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-full  transition duration-150 ease-in-out"
              aria-label="Twitter">
              <AiOutlineTwitter size="22px" />
            </a>
          </li>
          <li className="ml-4">
            <a
              href="https://github.com/pranavp10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-gray-900  hover:bg-white-100 dark:hover:text-gray-100 rounded-full  transition duration-150 ease-in-out"
              aria-label="Github">
              <AiFillGithub size="22px" />
            </a>
          </li>
        </ul>
        <div className="text-md text-gray-600  dark:text-gray-100 mr-4">
          {new Date().getFullYear()} No &#169; copyright issue
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
