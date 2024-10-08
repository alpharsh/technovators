import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="relative bg-gray-900 text-white py-16 px-8">
        {/* Curved Divider */}
        <div className="absolute inset-x-0 top-0 overflow-hidden">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "#fdd7b7", height: 90 }}
            className="md:w-[113%] w-[270%]"
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>

        {/* Sponsor Call to Action */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-normal mb-6">Want to Collaborate?</h2>
          <a
            href="mailto:technovators2024@gmail.com"
            className="inline-block bg-white  text-black px-8 py-3 rounded-sm shadow-md font-bold transition-transform duration-300 hover:scale-105"
          >
            Apply <span className="inline-block ml-2">↗</span>
          </a>
        </div>
      </section>
      <section className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 text-black py-16 px-5 md:px-8">
        <div className="md:px-7 px- mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: FAQ Heading */}
          <div className="md:w-1/2 mb-3 md:mb-0 text-center md:text-start">
            <h2 className="text-6xl orangetext font-bold mb-4">FAQ</h2>
            <p className="text-2xl mb-6">
              Feeling Overwhelmed?
            </p>
{/*             <a
              href="#"
              className="inline-block bg-white text-black px-6 py-3 rounded-md shadow-md font-bold transition-transform duration-300 hover:scale-105 btnhl"
            >
              Contact Us <span className="inline-block ml-2">↗</span>
            </a> */}
          </div>
          {/* Right Side: FAQ Content */}
          <div className=" flex flex-col mt-14 md:p-4 text-lg">
            <div className="flex justify-end">
              <div className="text-black md:w-1/2 font-semibold text-center bg-white p-[2%] px-[5.5%] mb-5 border border-black rounded-[5rem] rounded-br-none shadow-[0.05rem_0.1rem_0.3rem_black] leading-tight" data-aos="fade-up">
                Who can join the Technovators Society?
              </div>
            </div>
            <div className="text-white md:w-3/4 text-left bg-black p-3 px-[6%] mb-5 border border-black rounded-[3rem] rounded-tl-none shadow-[0.05rem_0.1rem_0.3rem_black] leading-tight" data-aos="fade-up">
              The Technovators Society welcomes all students, professionals, and
              tech enthusiasts who are passionate about technology and
              innovation. If you're interested in tech, join us and contribute
              to our vibrant community.
            </div>
            <div className="flex justify-end">
              <div className="text-black md:w-1/2 font-semibold text-center bg-white p-[2%] px-[5.5%] mb-5 border border-black rounded-[5rem] rounded-br-none shadow-[0.05rem_0.1rem_0.3rem_black] leading-tight" data-aos="fade-up">
                How does Technovators Society benefit its members?
              </div>
            </div>
            <div className="text-white md:w-3/4 text-left bg-black p-3 px-[6%] mb-5 border border-black rounded-[3rem] rounded-tl-none shadow-[0.05rem_0.1rem_0.3rem_black] leading-tight" data-aos="fade-up">
              Technovators Society members enjoy exclusive events, networking with
              industry experts, skill-building workshops, and a supportive
              community for personal and professional growth in tech.
            </div>
            <div className="flex justify-end">
              <div className="text-black md:w-1/2 font-semibold text-center bg-white p-[2%] px-[5.5%] mb-5 border border-black rounded-[5rem] rounded-br-none shadow-[0.05rem_0.1rem_0.3rem_black] leading-tight" data-aos="fade-up">
              Is there a membership fee to join the Technovators Society?
              </div>
            </div>
            <div className="text-white md:w-3/4 text-left bg-black p-3 px-[6%] mb-5 border border-black rounded-[3rem] rounded-tl-none shadow-[0.05rem_0.1rem_0.3rem_black] leading-tight" data-aos="fade-up">
            No, there is no membership fee to join the Technovators Society. Our events and activities are open to all who are interested in participating and contributing to the community.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
