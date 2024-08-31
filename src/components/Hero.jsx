import React from "react";
import "../index.css";

const HeroSection = () => {
  return (
    <div className="radial-gradient-bg py-10 pt-1 text-white h-fit flex flex-col justify-center items-center">
      {/* Navbar */}
      <nav className="flex justify-between w-11/12 md:w-11/12 mx-auto py-4">
        <div className="flex items-center space-x-1">
          <img src="logo.png" alt="logo" className="md:w-[4rem] w-9"/>
          <h1 className="md:text-3xl text-xl font-medium logotxt">Technovators</h1>
        </div>
      </nav>


      {/* Hero Content */}
      <div className="text-center md:mt-24 mt-14 relative w-11/12 md:w-3/4 mx-auto">
        <div className="flex justify-center items-center flex-col">
          <h1 className="md:text-8xl text-5xl font-bold">
            We are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
              Technovators!
            </span>
          </h1>
          <p className="md:mt-20 mt-10 font-medium md:text-4xl text-2xl">
            Together we define the future
          </p>
          <p className="md:mt-16 mt-10 md:text-2xl text-xl font-medium text-gray-300 relative md:w-3/4 leading-tight">
            Step into a virtual playground where creativity soars, ideas spark,
            and innovation knows no bounds. Ready to ignite your passion and
            make tech magic? Join us and let your brilliance shine!
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex justify-center space-x-4">
          <button className="md:px-11 px-7 md:py-2 py-1 rounded-full text-lg text-black font-bold bg-gradient-to-r from-orange-400 to-purple-400 hover:from-orange-500 hover:to-purple-500 transition-all">
            Register
          </button>
          <button className="md:px-7 px-4 md:py-2 py-1 rounded-full text-lg font-medium border-2 border-gray-300 hover:bg-gray-700 transition-all flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.99H7.898v-2.886h2.54V9.417c0-2.516 1.492-3.893 3.776-3.893 1.095 0 2.238.195 2.238.195v2.46h-1.26c-1.241 0-1.63.771-1.63 1.562v1.872h2.773l-.443 2.886h-2.33v6.99C18.343 21.128 22 16.991 22 12c0-5.514-4.486-10-10-10z" />
            </svg>
            Join Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
