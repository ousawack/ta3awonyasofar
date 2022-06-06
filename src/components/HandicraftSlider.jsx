import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../index.css";

const products = [
  {
    id: 1,
    name: "Rug Azeroual",
    img: "https://images.unsplash.com/photo-1550697318-16817b2dab3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 250,
    cooperative: "Dar Toubkal Cooperative",
    category: "Handicraft",
  },
  {
    id: 2,
    name: "Traditional Plate",
    img: "https://images.unsplash.com/photo-1538207059604-1c3294aacfac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 30,
    cooperative: "Azeroual Cooperative",
    category: "Handicraft",
  },
  {
    id: 3,
    name: "Toubkal Rug",
    img: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 400,
    cooperative: "Douar Souss Cooperative",
    category: "Handicraft",
  },
  {
    id: 4,
    name: "Essaouira Amelou",
    img: "https://images.unsplash.com/photo-1558442092-f97cd912801a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    price: 70,
    cooperative: "Al Haouz Cooperative",
    category: "Handicraft",
  },
  {
    id: 5,
    name: "Souss Argan",
    img: "https://images.unsplash.com/photo-1603204706569-b807e6abb4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    price: 50,
    cooperative: "ihechach Cooperative",
    category: "Handicraft",
  },
  {
    id: 6,
    name: "Another Rug",
    img: "https://images.unsplash.com/photo-1601769794684-079c168b2fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 450,
    cooperative: "Talbourjt Cooperative",
    category: "Handicraft",
  },
  {
    id: 7,
    name: "Another Plate",
    img: "https://images.unsplash.com/photo-1529060256154-8dca470c3325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 60,
    cooperative: "Dar Asni Cooperative",
    category: "Handicraft",
  },
  {
    id: 8,
    name: "Nice Artisanat",
    img: "https://images.unsplash.com/photo-1641644239376-52e9952a43a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1vcm9jY2FufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    price: 150,
    cooperative: "Amezmiz Cooperative",
    category: "Handicraft",
  },
];

const HandicraftSlider = () => {
  return (
    <>
      <section>
        <div class="max-w-screen-xl px-4 py-20 mx-auto">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Handicraft
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
          of the best handicraft products our cooperatives offer
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={32}
            grabCursor={true}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 620px
              620: {
                slidesPerView: 2,
              },
              // when window width is >= 860px
              860: {
                slidesPerView: 3,
              },
              // when window width is >= 1124px
              1124: {
                slidesPerView: 4,
              },
            }}
          >
            <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <a href="" class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm p-0">
                    <img
                      alt="Product Card"
                      src={product.img}
                      class="object-cover w-full -mt-3 h-96"
                    />

                    <h5 class="mt-4 mx-2 text-sm text-black/90">{product.name}</h5>

                    <div class="flex items-center justify-between mt-4 m-2 font-bold ">
                      <p class="text-lg">${product.price}.00</p>

                      <p class="text-xs text-center tracking-wide uppercase">
                        {product.cooperative}
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HandicraftSlider;
