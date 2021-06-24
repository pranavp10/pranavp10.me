import Link from 'next/link';

const PageNotFound = () => (
  <section>
    <div className="max-w-xl mx-auto px-4 sm:px-6">
      <div className="pt-32">
        <div className="text-center">
          <h1
            className="text-5xl font-extrabold leading-tighter tracking-tighter mb-8"
            data-aos="zoom-y-out">
            Oh, No! You stumbled upon a rarity
          </h1>
          <div className="max-w-sm mx-auto px-4 flex space-x-3 mb-4 text-sm font-medium h-10">
            <div className="flex-auto flex justify-center">
              <Link href="/">
                <a className="w-1/2 flex items-center justify-center rounded-md dark:bg-white dark:text-black bg-black text-white">
                  Go back Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PageNotFound;
