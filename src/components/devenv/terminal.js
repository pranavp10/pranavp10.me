import Image from 'next/image';

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
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
        Operating System
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
    <Image src="/static/terminal.svg" width={900} height={900} />
  </div>
);
export default OS;
