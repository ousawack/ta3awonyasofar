import React from "react";

const CooperativeHeader = () => {

  const seller = {
  name: "Cooperative Adrar Outidrarin",
  banner: "https://images.unsplash.com/photo-1630332457231-3f276a81a0a2",
  profile: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349",
  rating: 3.5,
  reviews: 285,
  products: 83,
  tags: [
    { type:"Cosmetics" },
    { type:"Handicraft" }
  ]
  }

return (
  <>
  <section id="CooperativeHeader">
  <div class="w-full bg-gradient-to-l from-rose-900 via-amber-800 to-yellow-600">
    <img alt="profil" src={seller.banner} class="h-80 w-full"/>
    <div class="flex flex-col items-center justify-center p-4 -mt-16">
        <a href="#" class="block relative">
            <img alt="profil" src={seller.profile} class="mx-auto object-cover rounded-full h-36 w-36  border-2 border-white dark:border-gray-800"/>
        </a>
        <div className="bg-gradient-to-b from-orange-400 to-yellow-200 drop-shadow-lg rounded-3xl px-20 md:px-36 pb-4 mt-4">
        <p class="text-gray-800 text-xl text-center font-extrabold my-6">
            {seller.name}
        </p>
        <div className="flex flex-row space-x-4 justify-center">
        {seller.tags.map((tag) => (
        <p class="text-xs font-semibold p-2 bg-pink-200 text-black px-4 rounded-full">
              {tag.type}
        </p>
        ))}
        </div>
        <div class="rounded-lg p-2 w-full mt-4">
            <div class="flex items-center justify-around text-medium font-semibold text-gray-800">
                <p class="flex flex-col">
                    Articles
                    <span class="text-black text-center font-bold mt-2">
                        {seller.products}
                    </span>
                </p>
                <p class="flex flex-col">
                  Reviews
                    <span class="text-black text-center font-bold mt-2">
                        {seller.reviews}
                    </span>
                </p>
                <p class="flex flex-col">
                    Rating
                    <span class="text-black text-center font-bold mt-2">
                    {seller.rating}
                    </span>
                </p>
            </div>
        </div>
    </div>
    </div>
</div>
  </section>
  </>
)
}

export default CooperativeHeader;