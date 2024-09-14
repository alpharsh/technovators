import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Sample images (replace with actual image paths)
const mentors = [{ name: "Dr. Himanshu Rai", image: "team/himanshusir.jpg" }];

const founders = [
  { name: "Dhanu Kumar", image: "team/dhanu.jpeg" },
  { name: "Gaurav Pandey", image: "team/gauravp.jpg" },
  { name: "Prateek Singh", image: "team/prateek.jpeg" },
  { name: "Aviral Srivastava", image: "team/aviral.jpg" },
  { name: "Deepesh Khatri", image: "team/deepesh.jpg" },
  { name: "Janhvi Mishra", image: "team/janhvim.jpeg" },
  { name: "Pragya Srivastava", image: "team/pragya.png" },
  { name: "Harshit Jaiswal", image: "team/harshitjais.png" },
];

const coreMembers = [
  { name: "Abhay Kesarwani", title: "President", image: "team/abhay.png" },
  { name: "Rishabh Vaish", title: "Vice President", image: "team/rishabh.jpg" },
  { name: "Ishita Banerjee", title: "Secretary", image: "team/ishita.jpg" },
  { name: "Arham Abbas", title: "Treasurer", image: "team/arham.jpg" },
  {
    name: "Shashank Singh",
    title: "Marketing and Outreach",
    image: "team/shashank.png",
  },
  {
    name: "Rituraj sahu",
    title: "Event Coordinator",
    image: "team/rituraj.jpg",
  },
  { name: "Mohammad Bilal", title: "Technical Head", image: "team/bilal.jpg" },
  { name: "Shreya Jain", title: "Technical Head", image: "team/shreya.jpg" },
  { name: "Faraz Khan", title: "Technical Lead", image: "team/faraz.jpg" },
  { name: "Ashita Madan", title: "Technical Lead", image: "team/ashita.jpg" },
  {
    name: "Shruti Srivastava",
    title: "Graphic Designer Head",
    image: "team/shruti.jpg",
  },
  {
    name: "Amaan Ullah Ansari",
    title: "Discipline Incharge",
    image: "team/amaan.jpg",
  },
];

const members = [
  { name: "Harsh Tripathi", image: "team/harsh.jpg" },
  { name: "Kaustubh Mani", image: "team/kaustubh.jpg" },
  { name: "Ishan Srivastava", image: "team/ishan.jpg" },
  { name: "Jahanvi Kesarwani", image: "team/jahanvi.jpg" },
  { name: "Sarthak Srivastava", image: "team/sarthak.jpg" },
];

const Coordinators = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100">
      <h2 className="md:text-5xl text-4xl mb-14 text-center font-bold whitetext">
        OUR TEAM
      </h2>

      {/* Mentors Section */}
      <div className="container w-3/4 mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl text-center font-semibold mb-6 whitetext">
          Mentors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
              data-aos="zoom-in"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-purple-200"
              />
              <h4 className="text-xl font-semibold text-center">
                {mentor.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Founders Section */}
      <div className="container md:w-3/4 mx-auto mb-20">
        <h3 className="text-3xl md:text-4xl text-center font-semibold mb-6 whitetext">
          Founders
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
              data-aos="zoom-in"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-purple-200"
              />
              <h4 className="text-xl font-semibold text-center">
                {founder.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Core Members Section */}
      <div className="container md:w-3/4 mx-auto mb-20">
        <h3 className="text-3xl md:text-4xl text-center font-semibold mb-6 whitetext">Core Members</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {coreMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
              data-aos="fade-up"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-purple-200"
              />
              <h4 className="text-xl font-semibold text-center">{member.name}</h4>
              <p className="text-gray-600 text-center">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Members Section */}
      <div className="container md:w-3/4 mx-auto mb-14">
        <h3 className="text-3xl md:text-4xl text-center font-semibold mb-6 whitetext">
          Members
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
              data-aos="fade-up"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-purple-200"
              />
              <h4 className="text-xl font-semibold text-center">
                {member.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
