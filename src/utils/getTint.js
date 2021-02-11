function getTint(color) {
  switch (color) {
    case 'red':
      return 'text-red-800 dark:text-red-200 bg-red-500 bg-opacity-20 dark:border-red-500';
    case 'blue':
      return 'text-blue-800 dark:text-blue-200 bg-blue-500 bg-opacity-20 dark:border-blue-500';
    case 'green':
      return 'text-green-800 dark:text-green-200 bg-green-500 bg-opacity-20 dark:border-green-500';
    case 'purple':
      return 'text-purple-800 dark:text-purple-200 bg-purple-500 bg-opacity-20 dark:border-purple-500';
    case 'indigo':
      return 'text-indigo-800 dark:text-indigo-200 bg-indigo-500 bg-opacity-20 dark:border-indigo-500';
    case 'pink':
      return 'text-pink-800 dark:text-pink-200 bg-pink-500 bg-opacity-20 dark:border-pink-500';
    case 'yellow':
      return 'text-yellow-800 dark:text-yellow-200 bg-yellow-500 bg-opacity-50 dark:border-yellow-500';
    case 'black':
      return 'text-white dark:text-black bg-black dark:bg-white bg-opacity-20 dark:border-black';
    case 'gray':
    default:
      return 'text-primary bg-gray-200 dark:bg-gray-800 dark:border-gray-500';
  }
}

export { getTint };
