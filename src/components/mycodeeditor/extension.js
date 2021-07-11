/* eslint-disable no-sparse-arrays */
import { extension } from '@/data/mycodeeditor';
import Card from './card';

const ListContainer = () => (
  <div className="mt-8">
    <div className="font-semibold text-primary mb-2">
      Vs Code extension for the Frontend developers
    </div>
    <div className="sm:grid justify-start sm:grid-cols-3 sm:gap-5 flex flex-col sm:space-y-0 space-y-4">
      {extension.map((data, index) => (
        <Card {...data} key={index} />
      ))}
    </div>
  </div>
);
export default ListContainer;
