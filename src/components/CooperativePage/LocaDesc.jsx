import React from "react";

const LocaDesc = () => {
  const seller = {
    location: "Agadir Ida Outanan, Souss Massa, Morocco",
    map: "https://maps.google.com/maps?q=Agadir,%20Souss,%20Massa,%20Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed",
    desc: "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.",
  };

  return (
    <>
    <section id="LocaDesc">
      <div class="bg-gradient-to-l from-rose-900 via-amber-800 to-yellow-600 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div class="text-center bg-gradient-to-b from-orange-400 to-yellow-200 drop-shadow-lg rounded-3xl py-4">
              <h2 class="text-gray-800 text-xl text-center sm:text-2xl font-semibold md:text-left mb-2 md:mb-4">
                Location
              </h2>
              <p class="text-gray-800 sm:text-lg text-center font-semibold mb-6 md:mb-8 mt-4">
                {seller.location}
              </p>
              <div className="flex justify-center items-center">
                <iframe
                  id="map"
                  className="rounded-xl h-72 w-72 md:h-96 md:w-96 mb-4"
                  src={seller.map}
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>

            <div class="p-4 bg-gradient-to-b from-orange-400 to-yellow-200 drop-shadow-lg rounded-3xl">
              <h2 class="text-gray-800 text-xl text-center sm:text-2xl font-semibold md:text-left mb-2 md:mb-4">
                Description
              </h2>
              <p class="text-gray-800 sm:text-lg mx-4 mb-6 md:mb-8 mt-4">
                {seller.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default LocaDesc;
