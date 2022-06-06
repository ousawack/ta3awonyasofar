import React, { useEffect } from "react";
import { useState } from "react";

const CooperativesListing = () => {
  const cooperatives = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1608800448081-8a37a0a3fb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdWt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      name: "Toubkal Cooperative",
      location: "Douar Amzil, Al Haouz, Morocco",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1618423205267-e95744f57edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
      name: "Azeroual Cooperative",
      location: "Ait Baha, Souss Massa, Morocco",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1567981964101-13d2faf0e38b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c291a3xlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60",
      name: "Souss Cooperative",
      location: "Douar Asni, Al Haouz, Morocco",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1608800448081-8a37a0a3fb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdWt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      name: "Toubkal Cooperative",
      location: "Douar Amzil, Al Haouz, Morocco",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1618423205267-e95744f57edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
      name: "Azeroual Cooperative",
      location: "Ait Baha, Souss Massa, Morocco",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1567981964101-13d2faf0e38b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c291a3xlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60",
      name: "Souss Cooperative",
      location: "Douar Asni, Al Haouz, Morocco",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1608800448081-8a37a0a3fb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdWt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      name: "Toubkal Cooperative",
      location: "Douar Amzil, Al Haouz, Morocco",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1618423205267-e95744f57edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
      name: "Azeroual Cooperative",
      location: "Ait Baha, Souss Massa, Morocco",
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1567981964101-13d2faf0e38b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c291a3xlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60",
      name: "Souss Cooperative",
      location: "Douar Asni, Al Haouz, Morocco",
    },
  ];
  const [coops, setCoops] = useState([]);
  const [currenCoops, setCurrentCoops] = useState([]);

  useEffect(() => {
    setCoops([...cooperatives]);
    setCurrentCoops([...cooperatives]);
  }, []);

  const editCoop = (e) => {
    var name = e.target.value;
    let newArray = currenCoops.filter((element) => {
      let lowerName = element.name.toLowerCase();
      let argument = name.toLowerCase();
      return lowerName.includes(argument);
    });
    setCoops([...newArray]);
  };

  return (
    <>
      <section id="Header">
        <div className="relative bg-amber-800">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Search for your <br className="hidden md:block" />
                favourite{" "}
                <span className="relative inline-block">
                  <div className="absolute inset-0 transform -skew-x-12 bg-amber-700" />
                  <span className="relative text-amber-200">cooperative</span>
                </span>
              </h2>
              <p className="mb-6 text-base text-indigo-100 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo. Sed ut perspiciatis unde omnis.
              </p>
              <div className="flex flex-row items-center w-full mb-4 md:flex-row md:px-16">
                <input
                  placeholder="Ex. Cooperative Ait Bougammaz"
                  onChange={editCoop}
                  type="text"
                  className="flex-grow w-full h-12 px-4 text-amber-900 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-amber-100 focus:border-amber-700 focus:outline-none focus:shadow-outline"
                />
                <a
                  href="/"
                  className="inline-flex items-center justify-center ml-4 h-12 px-6 font-bold tracking-wide text-amber-800 transition duration-200 rounded shadow-md md:w-auto hover:text-amber-200 bg-amber-200 hover:bg-amber-900 focus:shadow-outline focus:outline-none"
                >
                  Search
                </a>
              </div>
              <a
                href="#CooperativeCards"
                aria-label="Scroll down"
                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-amber-400 hover:border-amber-700 hover:shadow hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="CooperativeCards">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {coops.map((cooperative) => (
                <div id={cooperative.id}>
                  <a
                    href="#"
                    class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
                  >
                    <img
                      src={cooperative.img}
                      loading="lazy"
                      alt="Photo by Austin Wade"
                      class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                    />
                  </a>

                  <div class="flex justify-between items-start bg-amber-100 rounded-b-lg gap-2 p-4">
                    <div class="flex flex-col">
                      <a
                        href="#"
                        class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
                      >
                        {cooperative.name}
                      </a>
                      <span class="text-gray-500 text-sm lg:text-base">
                        Based in {cooperative.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CooperativesListing;
