import { DiUbuntu } from 'react-icons/di';

const OS = () => (
  <div className="flex items-center">
    <div>
      <h6 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white flex items-center">
        <DiUbuntu size={50} className="text-gray-500" />
        Operating System
      </h6>
      <ul className="text-md text-gray-600 mb-8 dark:text-gray-100 list-disc ml-5">
        <li>
          I personally prefer ubuntu as a Linux Distro, The reason behind it is that there are no
          windows env variables setup,it supports all tools necessary things.
        </li>
        <li>
          I wanted One Command Do Everything, I know Command line is not easy but once you
          understand it, you will never feel like switching.
        </li>
        <li>
          Virtual Box is easy to configure and there are features like backup, snapshot and many
          more.
        </li>
      </ul>
    </div>
  </div>
);
export default OS;
