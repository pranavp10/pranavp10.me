import { getTint } from '@/utils/getTint';
import { AiFillAlert } from 'react-icons/ai';

const Features = () => (
  <>
    <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
      Features
    </h3>
    <div className="flex mb-12 md:mb-12 timeline-item  rounded-md p-2 border border-white shadow-md hover:shadow-xl transition duration-200 ease-in-out cursor-pointer transform hover:scale-105 motion-reduce:transform-none w-full">
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
  </>
);

export default Features;
