/* eslint-disable no-unused-expressions */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DarkModeSwitch from './darkModeSwitch';

export default function Nav() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30   md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white dark:bg-black blur shadow-lg'
      }`}
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <ellipse cx="20" cy="15" rx="16" ry="15" fill="black" />
                <path
                  d="M10.732 10.864C11.628 10.56 12.556 10.408 13.516 10.408C14.476 10.408 15.272 10.612 15.904 11.02C16.536 11.428 16.852 12.052 16.852 12.892C16.852 13.732 16.556 14.44 15.964 15.016C15.372 15.584 14.66 15.868 13.828 15.868C13.22 15.868 12.916 15.636 12.916 15.172C12.916 15.028 12.944 14.876 13 14.716C13.216 14.772 13.412 14.8 13.588 14.8C14.14 14.8 14.556 14.648 14.836 14.344C15.124 14.04 15.268 13.62 15.268 13.084C15.268 12.54 15.116 12.136 14.812 11.872C14.508 11.608 14.084 11.476 13.54 11.476C13.26 11.476 12.92 11.524 12.52 11.62C12.456 12.604 12.424 13.476 12.424 14.236C12.424 16.364 12.508 17.904 12.676 18.856C12.42 18.952 12.148 19 11.86 19C11.572 19 11.32 18.908 11.104 18.724C10.896 18.54 10.792 18.296 10.792 17.992C10.792 17.688 10.832 17.16 10.912 16.408C10.992 15.648 11.032 15.04 11.032 14.584C11.032 13.192 10.932 11.952 10.732 10.864ZM17.6298 12.832C18.0778 12.648 18.5578 12.328 19.0698 11.872C19.3178 11.648 19.5498 11.456 19.7658 11.296C19.9818 11.136 20.2458 11.056 20.5578 11.056C20.8778 11.056 21.1498 11.112 21.3738 11.224C21.1818 12.744 21.0858 14.168 21.0858 15.496C21.0858 16.824 21.1578 17.968 21.3018 18.928C21.0778 19.024 20.8178 19.072 20.5218 19.072C20.2258 19.072 19.9858 18.976 19.8018 18.784C19.6178 18.592 19.5258 18.336 19.5258 18.016C19.5258 17.688 19.5898 17.004 19.7178 15.964C19.8458 14.924 19.9138 13.796 19.9218 12.58C19.8338 12.66 19.6858 12.82 19.4778 13.06C19.0138 13.596 18.6498 13.864 18.3858 13.864C18.1298 13.864 17.9378 13.768 17.8098 13.576C17.6898 13.384 17.6298 13.136 17.6298 12.832ZM26.85 16.936C26.954 16.608 27.026 16.284 27.066 15.964C27.114 15.644 27.138 15.3 27.138 14.932C27.138 14.564 27.118 14.232 27.078 13.936C27.038 13.64 26.966 13.352 26.862 13.072C26.638 12.48 26.19 12.184 25.518 12.184C25.094 12.184 24.734 12.348 24.438 12.676C24.174 13.308 24.042 14.184 24.042 15.304C24.042 16.328 24.19 17.048 24.486 17.464C24.758 17.832 25.15 18.016 25.662 18.016C25.95 18.016 26.194 17.92 26.394 17.728C26.602 17.528 26.754 17.264 26.85 16.936ZM28.722 14.848C28.722 16.048 28.406 17.064 27.774 17.896C27.142 18.728 26.278 19.144 25.182 19.144C24.534 19.144 23.998 18.972 23.574 18.628C23.158 18.276 22.866 17.836 22.698 17.308C22.538 16.772 22.458 16.144 22.458 15.424C22.458 14.216 22.774 13.188 23.406 12.34C24.046 11.484 24.91 11.056 25.998 11.056C26.646 11.056 27.178 11.236 27.594 11.596C28.018 11.956 28.31 12.408 28.47 12.952C28.638 13.496 28.722 14.128 28.722 14.848Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <nav className="md:flex md:flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="/learning"
                  className="px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Learning
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <DarkModeSwitch />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
