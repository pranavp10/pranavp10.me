import CheckMark from './CheckMark';

const Why = () => (
  <div>
    <h3 className="font-semibold text-primary">Why These Packages?</h3>
    <ol className="text-gray-700 dark:text-gray-400 list-decimal ml-4 mt-2">
      <li>
        These Packages are one of the most used packages in production. The reason I've created and
        shared this list is because I wanted to make it easy for everyone.
      </li>
      <li>
        That sparked a thought in me "Why not create site where everything can be found in a single
        place? " Awesome right? So this is where that thought landed.
      </li>
    </ol>
    <div className="space-y-1 mt-4">
      <CheckMark text="Used in production" tried />
      <CheckMark text="Still need to learn & try" />
    </div>
  </div>
);

export default Why;
