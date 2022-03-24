import React from "react";

function HomepageSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center   md:flex md:space-x-6    ">
            <div className="md:w-1/2 ">
              <h3 className="text-2xl font-semibold text-gray-800">
                Lorem ipsum dolor sit amet, consectetur
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className="block mt-8 text-darkFont ">
                <button className="border border-teal-500 text-darkFont block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
                  Customer Page
                </button>
              </a>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    className="object-cover object-center w-full rounded-md shadow"
                    src="https://www.expatica.com/app/uploads/sites/3/2014/05/dutch-supermarket-1920x1080.jpg"
                    alt="grocery"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    className="object-cover object-center w-full rounded-md shadow"
                    src="https://www.expatica.com/app/uploads/sites/3/2014/05/dutch-supermarket-1920x1080.jpg"
                    alt="grocery"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Lorem ipsum dolor sit amet, consectetur
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className="block mt-8 text-indigo-700 ">
                <button className="border border-teal-500 text-darkFont block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
                  Customer Page
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomepageSection;
