import React from "react";

const Faq = () => {
  return (
    <>
      <section className="relative bg-black text-white py-16 px-8">
        {/* Curved Divider */}
        <div className="absolute inset-x-0 top-0 overflow-hidden">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "#fdd7b7", width: "100%", height: 92 }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>

        {/* Sponsor Call to Action */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-normal mb-6">Want to be a Sponsor?</h2>
          <a
            href="#"
            className="inline-block bg-white  text-black px-8 py-3 rounded-sm shadow-md font-bold transition-transform duration-300 hover:scale-105"
          >
            Apply <span className="inline-block ml-2">↗</span>
          </a>
        </div>
      </section>
      <section className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 text-black py-16 px-8">
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: FAQ Heading */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-6xl orangetext font-bold mb-4">FAQ</h2>
            <p className="text-2xl mb-6">
              Feeling Overwhelmed? Reach out to us.
            </p>
            <a
              href="mailto:techclub@iiitkottayam.ac.in"
              className="inline-block bg-white text-black px-6 py-3 rounded-md shadow-md font-bold transition-transform duration-300 hover:scale-105 btnhl"
            >
              Contact Us <span className="inline-block ml-2">↗</span>
            </a>
          </div>
          {/* Right Side: FAQ Content */}
          <div className="md:w-1/2 space-y-4">
            <div className="bg-white text-black p-4 rounded-xl shadow-lg">
              <p className="font-semibold">Am I eligible for the events?</p>
              <p className="mt-2">
                As long as you are currently enrolled in an Undergraduate degree
                program, you can participate in any event.
              </p>
            </div>
            <div className="bg-black text-white p-4 rounded-xl shadow-lg">
              <p className="font-semibold">
                I don't have any prior experience with the event. Should I
                participate?
              </p>
              <p className="mt-2">
                Don't worry. Just check out our event page and hop on to our
                discord server. We will make sure you are equipped with the
                essential resources.
              </p>
            </div>
            <div className="bg-white text-black p-4 rounded-xl shadow-lg">
              <p className="font-semibold">
                What if my doubts are not listed here?
              </p>
              <p className="mt-2">
                We are happy to resolve all the doubts, just email us at
                xyz@united.ac.in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
