/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Example() {
  return (
    <div className="flex bg-blue-gray-50 overflow-hidden pt-5">
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 dark:text-gray-400">
              you are adding new password to you profile
            </p>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
              Back
            </button>
          </div>
          <h1 className="text-3xl font-extrabold text-blue-gray-900">Account</h1>
          <form className="mt-12" action="" method="POST">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="john@doe.com"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                Email address
              </label>
            </div>
            <div className="mt-10 relative">
              <input
                id="password"
                type="password"
                name="password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                Password
              </label>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
