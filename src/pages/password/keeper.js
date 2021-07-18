import { BsShieldLock } from 'react-icons/bs';

const Keeper = () => (
  <div className="pt-32">
    <div className="text-center">
      <div className="relative w-full flex justify-center items-center flex-col">
        <div className="relative w-full">
          <div className="absolute top-96 -bottom-96 left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-70 filter blur-xl animate-blob" />
          <div className="absolute top-96 -bottom-96 right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply opacity-70 filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute top-96 -bottom-96 left-28  w-96 h-96  bg-pink-300 rounded-full mix-blend-multiply  opacity-70 filter blur-xl animate-blob animation-delay-4000" />
        </div>
        <div className="relative">
          <div className="flex justify-center items-center flex-col">
            <BsShieldLock className="w-52 h-52" />
            <h1
              className="text-5xl font-extrabold leading-tighter tracking-tighter my-4 max-w-sm"
              data-aos="zoom-y-out">
              Free and open source password manage
            </h1>
          </div>
          <h2
            className="text-md text-gray-800 mb-8 dark:text-gray-100 max-w-xl mx-auto"
            data-aos="zoom-y-out"
            data-aos-delay="150">
            This is a open source password manager which is developed by the developer for the
            developer so that its free for you as well as for your family.
          </h2>
          <div className="max-w-3xl mx-auto">sdfjfalkf</div>
        </div>
      </div>
    </div>
  </div>
);
export default Keeper;
