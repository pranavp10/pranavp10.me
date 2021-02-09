import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => (
  <div className="">
    <footer className="footer max-w-3xl m-auto px-10 pb-5">
      <div className="divide-y pb-4">
        <div />
        <div />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium">No &#169; copyright issue</p>
        <div className="flex space-x-2 items-center text-xl">
          <a>
            <AiFillGithub />
          </a>
          <a>
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
