const NewsLatter = () => (
  <div className="mb-16 mx-auto sm:p-4">
    <div className="relative border border-gray-200 rounded-lg overflow-hidden sm:p-12 p-6">
      <h2 className="text-2xl font-bold leading-8 text-gray-900 dark:text-gray-100">
        Want to learn something new?
      </h2>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-100">
        Get the latest news and articles to your inbox.
      </p>
      <div className="sm:flex mt-4">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="block w-full px-4 py-3 text-base appearance-none border border-gray-300 shadow-none bg-white dark:bg-gray-900 rounded-md placeholder-gray-500 focus:outline-none"
        />
        <button
          type="button"
          className="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-black dark:bg-white text-white dark:text-black rounded-md shadow-md focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default NewsLatter;
