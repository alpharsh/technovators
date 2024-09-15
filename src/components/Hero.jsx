import React, { useEffect } from "react";
import "../index.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="radial-gradient-bg py-10 pt-1 text-white md:h-fit flex flex-col justify-center items-center">
      {/* Navbar */}
      <nav className="flex justify-between w-11/12 md:w-11/12 mx-auto py-4">
        <div className="flex items-center space-x-1">
          <img src="logo.png" alt="logo" className="md:w-[4rem] w-9" />
          <h1 className="md:text-3xl text-xl font-medium logotxt">
            Technovators
          </h1>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="text-center md:mt-24 mt-14 relative w-11/12 md:w-3/4 mx-auto">
        <div className="flex justify-center items-center flex-col">
          <h1
            className="md:text-8xl mb-5 text-5xl font-bold"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            We are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
              Technovators!
            </span>
          </h1>
          <div
            className="mx-auto flex flex-col justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <p className="md:mt-20 mt-10 font-medium md:text-4xl text-2xl">
              Together we define the future
            </p>
            <p className="md:mt-16 mt-10 md:text-2xl text-xl font-light text-gray-300 relative  md:w-3/4 leading-tight">
              Step into a virtual playground where creativity soars, ideas
              spark, and innovation knows no bounds. Ready to ignite your
              passion and make tech magic? Join us and let your brilliance
              shine!
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex justify-center items-end  flex-row space-x-3 space-y-3 ">
          <div>
            <a
              href="https://whatsapp.com/channel/0029VaoXHvT05MUihnrrGn0k"
              target="_blank"
            >
              <button className="flex items-center justify-center md:px-7 px-2 md:py-2 py-1 rounded-full text-sm md:text-lg text-black font-semibold bg-gradient-to-r from-orange-400 to-purple-400 hover:from-orange-500 hover:to-purple-500 transition-all">
                <i class="fa-brands mr-2 fa-whatsapp"></i>
                <div>WhatsApp</div>
              </button>
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/technovators_society/"
              target="_blank"
            >
              <button className="flex items-center justify-center md:px-7 px-2 md:py-2 py-1 rounded-full text-sm md:text-lg text-black font-semibold bg-gradient-to-r from-orange-400 to-purple-400 hover:from-orange-500 hover:to-purple-500 transition-all">
                <i className="fab mr-2 fa-instagram"></i>
                <div>Instagram</div>
              </button>
            </a>
          </div>

          <div>
            <a href="https://t.me/technovators2024" target="_blank">
              <button className="flex items-center justify-center md:px-7 px-3 md:py-2 py-1 rounded-full text-sm md:text-lg text-black font-semibold bg-gradient-to-r from-orange-400 to-purple-400 hover:from-orange-500 hover:to-purple-500 transition-all">
                <i class="fa-brands mr-2 fa-telegram"></i>
                <div>Telegram</div>
              </button>
            </a>
          </div>

          {/* <a
            href="https://www.instagram.com/technovators_society"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="md:px-7 px-4 md:py-2 py-1 rounded-full text-lg font-medium border-2 border-gray-300 hover:bg-gray-700 transition-all flex items-center">
              <i className="fab mr-2 fa-instagram"></i>
              Instagram
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
