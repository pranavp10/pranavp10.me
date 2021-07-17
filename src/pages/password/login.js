import { AiFillGithub } from 'react-icons/ai';
import { BsShieldLock } from 'react-icons/bs';

const Login = () => {
  const a = '';
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="mr-5">
        <BsShieldLock className="w-52 h-52 text-black" />
      </div>
      <div className="max-w-sm">
        <h1
          className="text-4xl font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out">
          Login to your password manager
        </h1>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center px-4 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          <AiFillGithub className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          <b>Continue with GitHub</b>
        </button>
      </div>
    </div>
  );
};

export default Login;
