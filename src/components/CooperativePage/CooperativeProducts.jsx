import React from "react";

const CooperativeProducts = () => {
  const products = [
    {
      id: 1,
      name: "Rug Azeroual",
      img: "https://images.unsplash.com/photo-1550697318-16817b2dab3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 250,
      cooperative: "Cooperative Adrar Outidrarin",
      category: "Handicraft",
    },
    {
      id: 2,
      name: "Traditional Plate",
      img: "https://images.unsplash.com/photo-1538207059604-1c3294aacfac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 30,
      cooperative: "Cooperative Adrar Outidrarin",
      category: "Handicraft",
    },
    {
      id: 3,
      name: "Toubkal Rug",
      img: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 400,
      cooperative: "Cooperative Adrar Outidrarin",
      category: "Handicraft",
    },
    {
      id: 4,
      name: "Essaouira Amelou",
      img: "https://images.unsplash.com/photo-1558442092-f97cd912801a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      price: 70,
      cooperative: "Cooperative Adrar Outidrarin",
      category: "Handicraft",
    },
    {
      id: 5,
      name: "Souss Argan",
      img: "https://images.unsplash.com/photo-1603204706569-b807e6abb4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      price: 50,
      cooperative: "Cooperative Adrar Outidrarin",
      category: "Handicraft",
    },
    {
      id: 6,
      name: "Another Rug",
      img: "https://images.unsplash.com/photo-1601769794684-079c168b2fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 450,
      cooperative: "Cooperative Adrar Outidrarin",
      category: "Handicraft",
    },
    {
      id: 7,
      name: "Another Plate",
      img: "https://images.unsplash.com/photo-1529060256154-8dca470c3325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 60,
      cooperative: "Cooperative Adrar Outidrarin",
      category: "Handicraft",
    },
    {
      id: 8,
      name: "Nice Artisanat",
      img: "https://images.unsplash.com/photo-1641644239376-52e9952a43a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1vcm9jY2FufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
      price: 150,
      cooperative: "Cooperative Adrar Outidrarin",
      category: "Handicraft",
    },
  ];

  return (
    <>
      <div class="bg-gradient-to-l from-rose-900 via-amber-800 to-yellow-600 py-6 sm:py-8 lg:py-12">
        <div class="bg-gradient-to-b from-orange-400 to-yellow-200 drop-shadow-lg rounded-3xl max-w-screen-2xl p-4 md:px-8 sm:mx-auto">
          <div class="flex justify-between items-end gap-4 mb-6">
            <h2 class="text-gray-800 text-2xl font-bold">Featured products</h2>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            {products.map((product) => (
              <div>
                <a
                  href="#"
                  class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
                >
                  <img
                    src={product.img}
                    loading="lazy"
                    alt="Photo by Rachit Tank"
                    class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />
                </a>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 font-semibold hover:gray-800 lg:text-lg transition duration-100 mb-1"
                  >
                    {product.name}
                  </a>

                  <div class="flex items-end gap-2">
                    <span class="text-gray-800 lg:text-lg font-bold">
                      {product.price}$
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CooperativeProducts;
