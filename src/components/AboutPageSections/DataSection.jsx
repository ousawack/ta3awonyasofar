import React from "react";

const DataSection = () => {
  return (
    <>
      <section className="DataSection">
        <div className="flex w-full p-24">
          <div className="grid h-full flex-grow bg-transparent rounded-box text-center">
            <h2 className="text-3xl font-extrabold text-white dark:text-white">
              267
            </h2>
            <p className="mt-3 text-xl font-bold tracking-widest text-indigo-100">
              hours of working together
            </p>
          </div>
          <div className="divider divider-horizontal px-8" />
          <div className="grid h-full flex-grow bg-transparent rounded-box text-center">
            <h2 className="text-3xl font-extrabold text-white dark:text-white">
              57
            </h2>
            <p className="mt-3 text-xl font-bold tracking-widest text-indigo-100">
              supported cooperatives around the country
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataSection;
