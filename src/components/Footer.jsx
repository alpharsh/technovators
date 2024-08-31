import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 relative md:w-1/2">
          <img src="logo.png" alt="logo" className="h-12 mb-4" />
          <p className="text-gray-400 text-xl leading-tight">
            Technovators Club is a vibrant community dedicated to organizing
            technical events like hackathons, talks, and workshops. Our mission
            is to foster innovation and collaboration among tech enthusiasts,
            connecting students with industry experts to enhance technical
            skills and knowledge sharing.
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <div className="h-1 w-full rounded-md bg-custom-gradient mb-4"></div>
          <p className="text-gray-400 text-xl leading-tight">
            United College of Engineering and Research, Prayagraj
            <br />
            UPSIDC Industrial Area, Naini
            <br />
            Prayagraj, U.P - 211010
          </p>
          <div className="flex mt-4 justify-start">
            <a
              href="https://www.linkedin.com"
              className="text-gray-400 text-2xl hover:text-white mr-4 bg-gray-300 bg-opacity-20 rounded-full p-2 px-[0.90rem]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 text-2xl hover:text-white bg-gray-300 bg-opacity-20 rounded-full p-2 px-[0.90rem]"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-lg">
        Made with <span className="text-red-500">❤</span> by alpharsh.
      </div>
    </footer>
  );
};

export default Footer;
