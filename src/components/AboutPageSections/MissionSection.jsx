import React from "react";

const MissionSection = () => {
  return (
    <>
      <section className="MissionSection">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="overflow-hidden relative">
            <div className="text-start lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <span className="mb-8 text-lg font-bold tracking-widest text-indigo-200 uppercase">
                OUR MISSION
              </span>
              <h2 className="text-3xl mt-4 font-extrabold text-white dark:text-white sm:text-4xl">
                Explore. Lead. Do.
              </h2>
              <p className="mt-7 text-lg font-semibold tracking-wide text-indigo-100">
                Moroccoop is a Silicon Valley-based company that makes data
                analytics available for everyone. Our platform lets businesses
                turn data into action. We are humble yet confident, inquisitive
                yet disciplined. We're hungry to learn, inspire, and drive
                value. We're detail-oriented, but not perfectionists. We work
                hard but know how to play hard too. We love what we do, and it
                shows in our results. Join us if you want to be challenged every
                day with the freedom to be creative and innovative!
              </p>
            </div>
            <img
              src="/assets/img/sitting-4.png"
              className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionSection;
