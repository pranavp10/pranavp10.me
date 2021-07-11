import Image from 'next/image';
import IconNext from './IconText';

const Why = () => (
  <div>
    <Image src="/static/env.png" width={700} height={500} />
    <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
      Why Dev .env ?
    </h3>
    <p className="text-md text-gray-600 mb-8 dark:text-gray-100">
      Dev.env will help you setup the Development environment which will keep the personal Directory
      and Development Directory different so that you can work fearlessly and feel like a real
      Developer.
    </p>
    <div className="space-y-2">
      <IconNext text="Pro Dev" />
      <IconNext text="Backup & Move" />
      <IconNext text="Easy to use" />
    </div>
    <h4 className="text-md text-gray-600 dark:text-gray-100 mt-8 mb-4">
      <b>Motivation - </b> It took me a long time to figure things out. I thought of sharing it with
      everyone, so that it would actually save some time. So instead of searching for different
      things at different places, one can find the one stop solution here.
    </h4>
    <h4 className="text-md text-gray-600 dark:text-gray-100 my-4">
      <b>7 steps -</b> It takes only 7 steps to Set the Development environment completely.
    </h4>
    <h5 className="text-md text-gray-600 my-4 dark:text-gray-100">
      <b>~3.2 Hours -</b> The time required to set up the environment is approximately 3.2 hours,
      more or less based on individual's system and internet speed.
    </h5>
    <h6 className="text-md text-gray-600 my-4 dark:text-gray-100">
      <b>Who Is This For ? -</b> If you are still not sure that its for you or not, then email me
      and ask
    </h6>
    <div className="space-y-2 mb-4">
      <IconNext text="Beginners" />
      <IconNext text="Command Line" />
      <IconNext text="Dev & Software Engineer" />
      <IconNext text="Open Source Contributors" />
    </div>
  </div>
);
export default Why;
