import React from "react";
import "../index.css";

const AboutSection = () => {
  return (
    <div className="bg-white bg-gradient-to-t from-white via-[#ffe7d3] to-white py-20">
      <div className=" flex justify-center items-start flex-col px-[5%]">
        <h2 className="md:text-8xl text-3xl font-bold">
          What is <span className="whitetext">Technovators</span> ?
        </h2>
        <p className="mt-8 md:text-[2rem] font-light text-gray-800 leading-tight">
          Technovators Club is a dynamic community passionate about
          orchestrating technical events, including hackathons, talk series,
          conferences, guest lectures, and workshops. Our mission is to
          cultivate innovation and technical prowess among members and the wider
          community. We aim to facilitate collaboration, knowledge sharing, and
          problem-solving among tech enthusiasts, while bridging the gap between
          students and industry experts.
          <br />
          <br />
          Through our flagship Uhack series and other events, we provide a
          platform for learning, innovation, and growth, empowering individuals
          to shape the future of technology. Our vibrant community is dedicated
          to fostering a culture of innovation and excellence.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
