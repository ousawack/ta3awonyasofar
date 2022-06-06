import React from "react";

const cooperatives = [
  {
    id: 1,
    product: "Amelou",
    img: "https://images.unsplash.com/photo-1608800448081-8a37a0a3fb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdWt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    desc: "",
    cooperative: "Toubkal Cooperative",
    category: "food",
  },
  {
    id: 2,
    product: "paintings",
    img: "https://images.unsplash.com/photo-1618423205267-e95744f57edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
    desc: "",
    cooperative: "Azeroual Cooperative",
    category: "handicraft",
  },
  {
    id: 3,
    product: "Argan",
    img: "https://images.unsplash.com/photo-1567981964101-13d2faf0e38b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c291a3xlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60",
    desc: "",
    cooperative: "Souss Cooperative",
    category: "cosmetics",
  },
];

const CooperativeCards = () => {
  return (
    <>
      <section className="CooperativeCards">
        <div class="max-w-screen-xl px-4 py-24 mx-auto">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Cooperatives
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Some</span>
          </span>{' '}
          of the best cooperatives our marketplace offers
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
          <div className="CooperativeList block sm:inline-flex">
            {cooperatives.map((cooperative) => (
              <div
                className="CooperativeCard sm:px-6 py-6 md:py-0"
                key={cooperative.id}
              >
                <a
                  class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
                  href=""
                >
                  <img
                    class="object-cover w-full h-56"
                    src={cooperative.img}
                    alt=""
                  />

                  <div class="p-6">
                    <h5 class="text-xl font-bold">{cooperative.cooperative}</h5>

                    <p class="mt-2 text-sm text-gray-500">
                      This cooperative specializes in {cooperative.category} and
                      offers products such as {cooperative.product}.
                    </p>

                    <div class="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
                      Check it out
                      <span aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CooperativeCards;
