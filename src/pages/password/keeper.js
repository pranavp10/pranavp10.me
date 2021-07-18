import { getTint } from '@/utils/getTint';
import { AiFillAlert } from 'react-icons/ai';

const Keeper = () => {
  const a = '';
  return (
    <div className="pt-32">
      <div className="text-center">
        <div className="relative w-full flex justify-center items-center flex-col">
          <div className="max-w-lg relative w-full">
            <div className="absolute top-0 left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-70 filter blur-xl animate-blob" />
            <div className="absolute top-0 right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply opacity-70 filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute top-24 left-28  w-96 h-96  bg-pink-300 rounded-full mix-blend-multiply  opacity-70 filter blur-xl animate-blob animation-delay-4000" />
          </div>
          <div className="relative text-left">
            <h1
              className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out">
              Free password manage
            </h1>
            <h2
              className="text-md text-gray-600 mb-8 dark:text-gray-100 max-w-xl mx-auto"
              data-aos="zoom-y-out"
              data-aos-delay="150">
              The password manage was built with and its free to use and host it on your own so that
              it will be easu for you to store password any ware
            </h2>
            <div className="px-4 flex mb-4 text-sm font-medium justify-center h-10">
              <a
                href="/api/auth/login"
                className="flex items-center justify-center rounded-md dark:bg-white dark:text-black bg-black text-white px-5">
                Login now
              </a>
            </div>
            <div className="max-w-3xl mx-auto">
              <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                Features
              </h3>
              <div className="flex mb-12 md:mb-12 timeline-item bg-gray-50  rounded-md p-2">
                {/* Icon and dividing line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex justify-center p-3 rounded-full align-center border-4 border-gray-50 ${getTint()}`}>
                    <AiFillAlert size={16} />
                  </div>
                </div>
                <div className="flex flex-col flex-1 ml-4">
                  <div className="flex flex-col contents-center">
                    <span className="font-semibold text-primary">Fdskfsldf</span>
                  </div>
                  <div className="flex flex-col timeline-full-width">asdasdad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Keeper;
