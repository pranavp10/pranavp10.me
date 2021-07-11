import { config } from '@/data/mycodeeditor';
import { useState } from 'react';

const Gist = () => {
  const [copy, setCopy] = useState(false);
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">VS Code JSON settings</p>
        <button
          onClick={() => {
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 1000);
          }}
          type="button"
          className="mb-2 outline-none focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${copy ? 'text-blue-500' : 'text-gray-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </button>
      </div>
      <div className=" bg-gray-100 rounded-lg p-4 overflow-auto dark:bg-gray-800">
        <pre>{config}</pre>
      </div>
    </div>
  );
};
export default Gist;
