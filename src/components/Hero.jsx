import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1534273006427-1686266049b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-rose-200">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 160"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-rose-900 sm:text-4xl sm:leading-none">
                The best and most natural products...
                <br className="hidden md:block" />
                straight from the source
              </h2>
              <p className="max-w-xl mb-4 text-base font-semibold text-rose-700 md:text-lg">
                Get your most prized and precious items straight from the
                source, and support your favourite cooperatives while at it!
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-extrabold tracking-wider transition-colors duration-200 text-rose-900 hover:text-rose-500"
              >
                LEARN MORE
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
