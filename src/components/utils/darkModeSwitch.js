import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ColourModeOptions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [themeType, setThemeType] = useState('light');
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
    setThemeType(theme);
  }, []);
  return (
    <div className="flex rounded-md shadow-sm border-2 p-1 w-14 ml-3">
      <div className=" inset-y-0 left-0 flex items-center pointer-events-none dark:bg-black bg-white dark:border-gray-400 border-gray-300">
        <span className="text-gray-500 sm:text-xs dark:border-gray-400 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="h-3 w-3 text-gray-800 dark:text-gray-200">
            {themeType === 'light' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        </span>
      </div>
      <label htmlFor="mode">
        <select
          id="mode"
          name="mode"
          className="appearance-none block text-xs dark:bg-black bg-white outline-none focus:outline-none p-0"
          onChange={(e) => {
            if (isMounted) {
              setTheme(e.target.value);
              setThemeType(e.target.value);
            }
          }}
          value={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
};
export default ColourModeOptions;
