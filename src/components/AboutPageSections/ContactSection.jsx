import React, {useState} from "react";

const ContactSection = () => {

  const [chosenType, setChosenType] = useState("");
  const [ labelChooser , setLabelChosser  ] = useState({
    cooperative : true,
    deliveryman : false,
    client : false
  })

  const handleClick = (e) => {
    // alert(e.currentTarget.attributes["tag"].value)
    // alert(labelChooser[e.currentTarget.attributes["tag"].value])
    setLabelChosser(prevState => {
        let label = Object.assign({}, prevState);  // creating copy of state variable jasper
        label["cooperative"] = false; 
        label["deliveryman"] = false; 
        label["client"] = false; 
        label[e.currentTarget.attributes["tag"].value] = true;                     // update the name property, assign a new value                 
        return label;  

                                       // return new object jasper object
      })
      console.log(labelChooser)
    
  }

  return (
    <>
      <section className="ContactForm">
        <div className="mt-24 text-center">
          <h2 className="mb-4 text-lg font-bold tracking-widest text-indigo-200 uppercase">
            Get in touch with us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact us about your inquiries or questions
          </p>
        </div>
        <section className="bg-radial-at-r from-violet-300 via-blue-600 to-violet-700">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="max-w-xl text-lg text-indigo-200 font-semibold italic">
                  Feel free to contact us or send an inquiry about whatever
                  you're having an issue with, or any questions you have.
                </p>

                <div className="mt-4">
                  <a href="" className="text-2xl font-extrabold text-indigo-400">
                    {" "}
                    0151 475 4450{" "}
                  </a>

                  <address className="mt-2 text-indigo-200 font-semibold italic">
                    80000 Agadir, Souss Massa, Morocco
                  </address>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                <form action="" className="space-y-4">
                  <div>
                    <label className="sr-only" for="name">
                      Name
                    </label>
                    <input
                      className="w-full p-3 text-sm text-semibold border-gray-200 rounded-lg"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" for="email">
                        Email
                      </label>
                      <input
                        className="w-full p-3 text-sm text-semibold border-gray-200 rounded-lg"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" for="phone">
                        Phone
                      </label>
                      <input
                        className="w-full p-3 text-sm text-semibold border-gray-200 rounded-lg"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <input
                        className="sr-only"
                        id="Cooperative"
                        type="radio"
                        tabindex="-1"
                      />
                      <label
                        for="Cooperative"
                        onClick={handleClick}
                        tag="cooperative"
                        
                        className={`block w-full p-3 border border-indigo-200 rounded-lg cursor-pointer focus:border-2 ${labelChooser.cooperative == true ? "bg-red-900" : ""}`}
                        tabindex="0"
                      >
                        <span className="text-indigo-800 text-sm font-semibold">
                          {" "}
                          Cooperative{" "}
                        </span>
                      </label>
                    </div>

                    <div>
                      <input
                        className="sr-only"
                        id="Deliveryman"
                        type="radio"
                        tabindex="-1"
                      />
                      <label
                        for="Deliveryman"
                        onClick={handleClick}
                        tag="deliveryman"
                        className={`block w-full p-3 border border-indigo-200 rounded-lg cursor-pointer focus:border-2 ${labelChooser.deliveryman == true ? "bg-indigo-200" : ""}`}
                        tabindex="0"
                      >
                        <span className="text-indigo-800 text-sm font-semibold">
                          {" "}
                          Deliveryman{" "}
                        </span>
                      </label>
                    </div>

                    <div>
                      <input
                        className="sr-only"
                        id="Client"
                        type="radio"
                        tabindex="-1"
                      />
                      <label
                        for="Client"
                        onClick={handleClick}
                        tag="client"
                        className={`block w-full p-3 border border-indigo-200 rounded-lg cursor-pointer focus:border-2 ${labelChooser.client == true ? "bg-red-900" : ""}`}
                        tabindex="0"
                      >
                        <span className="text-indigo-800 text-sm font-semibold">
                          {" "}
                          Client{" "}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" for="message">
                      Message
                    </label>
                    <textarea
                      className="w-full p-3 text-sm text-semibold border-gray-200 rounded-lg"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-indigo-900 rounded-lg sm:w-auto"
                    >
                      <span className="font-semibold"> Send Message </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactSection;
