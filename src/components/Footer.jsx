import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-3 md:px-8 px-5">
      <div className="mx-auto flex flex-col md:w-11/12 md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 relative md:w-1/2">
          <img src="logo.png" alt="logo" className="h-12 mb-4" />
          <p className="text-gray-400 md:text-lg text-base leading-tight">
            Technovators Society is a vibrant community dedicated to organizing
            technical events like hackathons, talks, and workshops. Our mission
            is to foster innovation and collaboration among tech enthusiasts,
            connecting students with industry experts to enhance technical
            skills and knowledge sharing.
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <div className="h-1 w-full rounded-md bg-custom-gradient mb-4"></div>
          <p className="text-gray-400 md:text-lg text-base leading-tight">
            United College of Engineering and Research, Prayagraj
            <br />
            UPSIDC Industrial Area, Naini
            <br />
            Prayagraj, U.P - 211010
          </p>
          <div className="flex mt-4 justify-start">
            <a
              href="https://www.linkedin.com"
              className="text-gray-400 md:text-2xl text-xl hover:text-white mr-4 bg-gray-300 bg-opacity-20 rounded-full md:p-2 p-1 md:px-[0.90rem] px-[0.65rem]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/technovators_society/"
              className="text-gray-400 md:text-2xl text-xl hover:text-white bg-gray-300 bg-opacity-20 rounded-full md:p-2 p-1 md:px-[0.90rem] px-[0.65rem]"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="md:mt-8 mt-5 border-t border-gray-700 pt-4 text-center text-gray-500 text-base">
        Made with <span className="text-red-500">❤</span> by <a href="https://www.linkedin.com/in/alpharsh" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>alpharsh</a>.
      </div>
    </footer>
  );
};

export default Footer;
