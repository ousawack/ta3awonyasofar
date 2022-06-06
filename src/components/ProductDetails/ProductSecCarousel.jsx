import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    category: "Food",
  },
  {
    id: 5,
    name: "Souss Argan",
    img: "https://images.unsplash.com/photo-1603204706569-b807e6abb4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    price: 50,
    cooperative: "ihechach Cooperative",
    category: "Cosmetics",
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

const ProductSecCarousel = () => {
  return (
    <>
      <section id="FeaturedProducts" className="bg-gradient-to-l from-rose-900 via-amber-800 to-yellow-600 py-4 px-4">
        <div class="max-w-screen-xl px-4 py-6 mx-auto bg-gradient-to-b from-orange-400 to-yellow-200 drop-shadow-lg rounded-3xl">
        <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h5 className="max-w-lg mb-6 font-sans text-xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
          <span className="relative inline-block">
            FEATURED PRODUCTS
            </span>
        </h5>
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
                  <a href="" class="block overflow-hidden bg-gradient-to-b from-orange-200 to-yellow-100 rounded-xl drop-shadow-md p-0">
                    <img
                      alt="Product Card"
                      src={product.img}
                      class="object-cover w-full -mt-3 h-96"
                    />

                    <h5 class="mt-4 mx-2 text-sm sm:text-base font-bold tracking-wide text-center text-black/90">{product.name}</h5>

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

export default ProductSecCarousel;
