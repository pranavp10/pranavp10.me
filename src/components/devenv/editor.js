const OS = () => (
  <div className="flex items-center">
    <div>
      <h6 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
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
          Since I am using Ubuntu, I will be using terminal a lot. So I wanted the bash shell to be
          customized.
        </li>
        <li>
          ( because I am concerned about time, I wanted time to be reflected on my terminal and get
          many more features ) to make typing fast and easy, I came across oh my zsh to customize
          the bash shell and change it according to my requirement.
        </li>
        <li>
          I customized it by reading some blogs and watching some videos. Take a look at my gallery
          for more images and gif's
        </li>
      </ul>
    </div>
  </div>
);
export default OS;
