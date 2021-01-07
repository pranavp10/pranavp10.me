export default function Hero() {
  return (
    <div>
      <section className="relative">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Hey, I’m Pranav
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-md text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  I'm a forntend developer, technical writer, motivation
                  speaker. Building <b className="text-gray-900">Q</b>uze which
                  is going to effect million of students
                </p>
              </div>
              <div className="max-w-sm mx-auto px-4 flex space-x-3 mb-4 text-sm font-medium h-10">
                <div className="flex-auto flex space-x-3">
                  <button
                    className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
                    type="button"
                  >
                    More about me
                  </button>
                  <button
                    className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
                    type="button"
                  >
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
