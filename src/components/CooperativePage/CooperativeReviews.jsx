import React from "react";

const CooperativeReviews = () => {

  const feedback =
    {
      name: "John McCulling",
      rating: 5,
      date: "August 28, 2021",
      comment:
        "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    };

  const starsNumber = Math.floor(feedback.rating);
  const isHalfStar = !Number.isInteger(feedback.rating);
  const emptyStars = 5 - Math.ceil(feedback.rating);

  return (
    <>
      <section>
        <div class="bg-gradient-to-l from-rose-900 via-amber-800 to-yellow-600 py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
              <div class="lg:col-span-2 bg-gradient-to-b from-orange-400 to-yellow-200 drop-shadow-lg rounded-3xl p-4">
                <div class="border-b pb-4 md:pb-6 flex justify-between">
                  <h2 class="text-gray-800 text-lg lg:text-xl font-bold md:mt-3">
                    Top Reviews
                  </h2>
                  <a
                    href="#"
                    class="block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-bold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
                  >
                    Write a review
                  </a>
                </div>
                <div class="divide-y">
                  <div class="flex flex-col gap-3 py-4 md:py-8">
                    <div>
                      <span class="block text-base font-bold md:pb-2">
                        {feedback.name}
                      </span>
                    </div>

                    <div class="flex gap-0.5">
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
                      <span class="block text-gray-500 italic text-xs ml-4">
                        Purchased on {feedback.date}
                      </span>
                    </div>

                    <p class="text-gray-600">{feedback.comment}</p>
                  </div>
                </div>

                <div class="border-t pt-6">
                  <a
                    href="#"
                    class="flex items-center text-indigo-400 hover:text-indigo-500 active:text-indigo-600 font-semibold transition duration-100 gap-0.5"
                  >
                    Read all reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default CooperativeReviews;
