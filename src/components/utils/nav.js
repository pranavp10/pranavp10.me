import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsShieldLockFill } from 'react-icons/bs';

export default function Nav() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      // eslint-disable-next-line no-unused-expressions
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30   md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white dark:bg-gray-900 blur shadow-lg'
      }`}>
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <Link href="/">
              <b className="cursor-pointer">
                <i>P10</i>
              </b>
            </Link>
          </div>
          <nav className="md:flex md:flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <Link href="/learning">
                  <a className="px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    Learning
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a
                    href="/blog"
                    className="px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    Blog
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="/about">
                  <a className="px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/password/keeper">
                  <a className="px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out ">
                    <BsShieldLockFill className="w-5 h-5 hover:text-gray-900" />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
