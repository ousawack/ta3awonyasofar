import React, { useState } from "react";

const ProductSection = () => {
  const product = {
    name: "Berber rug - Cooperative Biougra",
    price: 199,
    rating: 4.4,
    reviews: 96,
    hrefReviews: "#Reviews",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id tenetur consectetur, rem vel repudiandae, obcaecati autem corporis maxime laborum debitis ullam. Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae. Facilis dolorem incidunt nobis quaerat exercitationem quos eaque ducimus aut possimus, aperiam, enim nulla provident! Ad necessitatibus atque pariatur, iste dignissimos ex.",
    features: [
      { name: "Material", details: "Bamboo, Glass" },
      { name: "Dimensions", details: '7"L x 4.5"W x 4.5"H' },
      { name: "Weight", details: "650 ml." },
      { name: "Other Info", details: "Hand Wash" },
    ],
    colors: [
      { name: "Black", class: "bg-black" },
      { name: "White", class: "bg-white" },
      { name: "Blue", class: "bg-sky-400" },
    ],
    sizes: [
      { name: "Small", inStock: true },
      { name: "Medium", inStock: true },
      { name: "Large", inStock: false },
    ],
    pictures: [
      {
        src: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80",
        alt: "A berber rug",
      },
      {
        src: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80",
        alt: "Probably a berber rug",
      },
      {
        src: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80",
        alt: "More berber rugs",
      },
      {
        src: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80",
        alt: "Another berber rug",
      },
      {
        src: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80",
        alt: "Another berber rug",
      },
      {
        src: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80",
        alt: "Another berber rug",
      },
    ],
    tags: [
      { name: "Tag"},
      { name: "Tag"},
      { name: "Tag"},
    ],
  };

  const [mainPicture, setMainPicture] = useState(0);

  const starsNumber = Math.floor(product.rating);
  const isHalfStar = !Number.isInteger(product.rating);
  const emptyStars = 5 - Math.ceil(product.rating);

  return (
    <>
      <section id="ProductSection" className="p-4 bg-gradient-to-l from-rose-900 via-amber-800 to-yellow-600">
        <div className="mx-auto w-full max-w-7xl bg-gradient-to-l from-rose-900 via-amber-800 to-yellow-600 text-gray-700">
          <div className="flex flex-col lg:flex-row bg-gradient-to-b from-orange-400 to-yellow-200 drop-shadow-lg rounded-3xl">
            {/* :PICTURES CONTAINER */}
            <div className="px-4 py-8 w-full lg:w-1/2 flex flex-col items-center">
              {/* ::Main Picture */}
              <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
                <img
                  src={product.pictures[mainPicture].src}
                  alt={product.pictures[mainPicture].alt}
                  className="object-contain w-full h-full rounded-md"
                />
              </div>
              {/* ::Gallery */}
              <div className="mt-6 mx-auto">
                <ul className="grid grid-flow-col auto-cols-fr gap-4">
                  {product.pictures
                    .slice(0, 5) // Here you can manage the number of pictures displayed
                    .map((picture, index) => (
                      <li
                        key={picture.alt}
                        className={`col-span-1 p-1 w-16 rounded border-2 ${
                          index === mainPicture
                            ? "border-yellow-600"
                            : "border-transparent"
                        }`}
                      >
                        <button
                          type="button"
                          className="block h-full rounded overflow-hidden"
                          onClick={() => setMainPicture(index)}
                        >
                          <img
                            src={picture.src}
                            alt={picture.alt}
                            className="object-contain"
                          />
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mt-4 sm:mx-auto">
                <span className="block text-base font-semibold text-center my-4">Tags</span>
                <div className="w-96 flex flex-row justify-center">
                {product.tags.map((tag) => (
                  <strong class="drop-shadow-md bg-gradient-to-t from-orange-200 to-yellow-100  text-amber-800 border-current uppercase mx-2 sm:mx-4 px-4 py-1.5 rounded-full text-[10px] tracking-wide">{tag.name}</strong>
                  ))}
                  </div>
                  </div>
                  <div className="mt-4">
                  <span className="block text-base font-semibold text-center my-4">Share Now</span>
                  <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-amber-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-amber-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-amber-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
</div>
            </div>

            {/* :PRODUCT DETAILS */}
            <div className="lg:py-8 w-full lg:w-1/2 flex flex-col">
              {/* ::Description Container */}
              <div className="order-1 lg:order-1 pb-2 px-4 sm:px-6">
                {/* :::Name */}
                <h1 className="lg:block text-center md:text-right text-2xl font-bold leading-none tracking-tight text-gray-900">
                  {product.name}
                </h1>
                {/* :::Description */}
                <p className="mt-6 text-base text-gray-500">
                  {product.description}
                </p>
                {/* :::Features */}
                <ul className="my-4 flex flex-col space-y-4">
                  {product.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="inline-flex items-center space-x-2 text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                      <span className="text-sm font-semibold">
                        {feature.name}:
                      </span>
                      <span className="text-sm font-normal">
                        {feature.details}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ::Customization Container */}
              <div className="order-2 lg:order-2 sm:px-6">
                <div className="flex flex-col items-center lg:items-start space-y-4">
                  {/* :::Quantity */}
                  <label htmlFor="quantity" className="text-base text font-semibold">
                    Select the quantity
                  </label>
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0"
                  />
                  {/* :::Color */}
                  
                  <label htmlFor="color" className="text-base font-semibold">
                    Select your color
                  </label>
                  <div className="flex justify-between space-x-4">
                  {product.colors.map((color) => (
                    <button
                      type="button"
                      value={color.name}
                      class="py-2 px-4 bg-orange-800 hover:bg-orange-700 focus:ring-orange-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                    >
                      {color.name}
                    </button>
                  ))}
                  </div>
                  {/* :::Size */}
                  <label htmlFor="size" className="text-base font-semibold">
                    Select your size
                  </label>
                  <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-4">
                  {product.sizes.map((size) => (
                    <button
                      type="button"
                      value={size.name}
                      class="py-2 px-4 bg-orange-800 hover:bg-orange-700 focus:ring-orange-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                    >
                      {size.name}
                    </button>
                  ))}
                  </div>
                </div>
              </div>

              {/* ::Actions Container */}
              <div className="order-3 lg:order-3 pt-3 flex flex-wrap lg:flex-nowrap justify-around items-center">
                {/* :::Price */}
                <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
                  <span className="font-normal">$</span>
                  {product.price}
                </span>
                {/* :::Add to cart button */}
                <button
                  type="button"
                  className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-green-600 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-green-800"
                >
                  Add to cart
                </button>
                {/* :::Reviews */}
                <div className="m-2.5 flex items-center">
                  {/* ::::rating stars */}
                  <div className="flex items-center space-x-1">
                    {/* full stars */}
                    {[...Array(starsNumber)].map((star, index) => (
                      <span key={index} className="flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-yellow-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                      </span>
                    ))}
                    {/* half star */}
                    {isHalfStar && (
                      <span className="flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-yellow-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                        </svg>
                      </span>
                    )}
                    {/* empty stars */}
                    {[...Array(emptyStars)].map((star, index) => (
                      <span key={index} className="flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-yellow-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                  {/* ::::all reviews */}
                  <a
                    href={product.hrefReviews}
                    className="ml-2 text-sm text-gray-500 italic"
                  >
                    ({`${product.reviews} reviews`})
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
