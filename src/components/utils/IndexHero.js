import Link from 'next/link';

export default function Hero() {
  return (
    <section>
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="pt-32">
          <div className="text-center">
            <h1
              className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out">
              Hey, I’m Pranav
            </h1>
            <div>
              <h2
                className="text-md text-gray-600 mb-8 dark:text-gray-100"
                data-aos="zoom-y-out"
                data-aos-delay="150">
                I'm a frontend developer, technical writer, motivation speaker. Building{' '}
                <b className="text-gray-900 dark:text-gray-100">Q</b>uze which is going to effect
                millions of students
              </h2>
            </div>
            <div className="max-w-sm mx-auto px-4 flex space-x-3 mb-4 text-sm font-medium h-10">
              <div className="flex-auto flex space-x-3">
                <Link href="/about">
                  <a className="w-1/2 flex items-center justify-center rounded-md dark:bg-white dark:text-black bg-black text-white">
                    More about me
                  </a>
                </Link>
                <a
                  href="https://github.com/pranavp10/pranavp10.now.sh"
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 flex items-center justify-center rounded-md border border-gray-300">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
