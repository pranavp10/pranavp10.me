import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

const OS = () => (
  <div className="flex items-center">
    <div>
      <h6 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        Code Editor
      </h6>
      <ul className="text-md text-gray-600 mb-8 dark:text-gray-100 list-disc ml-5">
        <li>
          I Use VS Code as an editor as its light weight, as it uses plugin system. Installing too
          many plugin will lead to RAM consumption
        </li>
        <li>
          I am very particular about the extensions. I always do some research before installing so
          that it will consume less RAM
        </li>
        <li>
          Take a look at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pranavp10/pranavp10.me/tree/main/public/gallery/vscode">
            <RoughNotation type="highlight" show color="#bfbfbf">
              <b>my gallery</b>
            </RoughNotation>
          </a>{' '}
          for more images, how it looks and feels to make our life more easier and focus on code
          rather than unwanted things
        </li>
        <li>
          Check out the{' '}
          <Link href="/mycodeeditor">
            <a>
              <RoughNotation type="highlight" show color="#bfbfbf">
                <b>VsCode extension</b>
              </RoughNotation>
            </a>
          </Link>{' '}
          that i use day today
        </li>
      </ul>
    </div>
  </div>
);
export default OS;
