import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const events = [
  {
    title: "Uhack 2.0 | Hackathon",
    date: "13-14 October, 2023",
    time: "9:00 AM - 7:00 PM",
    location: "UCER Campus",
    description: "Uhack 2.0 took the hackathon experience to the next level by expanding its scope to a city-level event, attracting talented individuals across the city with fresh perspectives and ideas. This edition introduced new challenges, themes, and prizes, facilitating partnerships with local organizations, startups, and industries, and providing participants with real-world problems to solve and potential opportunities for collaboration.",
    image: "uhack2.jpeg",
    link: "https://united.ac.in/uhack/",
  },
  {
    title: "Uhack | Hackathon",
    date: "04-05 October, 2022",
    time: "9:00 AM - 7:00 PM",
    location: "UCER Campus",
    description: "Uhack marked the beginning of a new era in hackathons, organized by the Technovator Society of United College of Engineering and Research. As a college-level event, it brought together talented students from within the institution to showcase their innovative ideas and problem-solving skills, providing a platform for collaboration, learning, and transforming ideas into reality.",
    image: "uhack1.jpg",
    link: "https://united.ac.in/uhack/",
  }
];

const PastEvents = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-14 bg-gray-100">
      <h2 className="md:text-4xl text-3xl font-bold text-center whitetext mb-10">PAST EVENTS</h2>
      <div className="container md:w-3/4 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden" data-aos="fade-up">
              <img
                src={event.image}
                alt={`${event.title} Image`}
                className={`w-full h-48 object-cover ${index > 2 ? 'filter blur-sm' : ''}`} // Apply blur only to images except the first one
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-600 mt-2">{event.description}</p>
                {/* {event.link !== "#" && (
                  <a
                    href={event.link}
                    target='_blank'
                    rel="noreferrer"
                    className="mt-4 inline-block bg-gradient-to-r from-purple-400 to-orange-400 text-white px-4 py-1 rounded-3xl hover:bg-blue-600 transition-all duration-500 bg-[length:100%_100%] ease-in-out hover:bg-[length:180%_180%]"
                  >
                    Learn More
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
