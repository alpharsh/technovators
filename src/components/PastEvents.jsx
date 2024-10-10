import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const events = [
  {
    title: "Webinar: Freshman Induction by Coding Ninjas",
    date: "29th September, 2024",
    time: "11:00 AM - 12:00 PM",
    location: "Online",
    description: "Join our online session for incoming freshmen to kickstart your coding journey! This interactive webinar covers essential programming skills and resources. Led by Coding Ninjas instructors, you'll gain insights into the tech landscape and career opportunities. Connect with peers, ask questions, and enhance your coding skills for a bright future in tech!",
    image: "coding_ninjas_webinar.jpg",
    // image: "tmp2.png",
    link: "https://tinyurl.com/4xm3f9z7",
  },
  {
    title: "Uhack 2.0 | Hackathon",
    date: "13-14 October, 2023",
    time: "9:00 AM - 7:00 PM",
    location: "UCER Campus",
    description: "Uhack 2.0 expanded to a city-level event, attracting talented individuals with fresh ideas. It introduced new challenges, themes, and prizes, and facilitated partnerships with local organizations, providing real-world problems and collaboration opportunities.",
    image: "uhack2.jpeg",
    link: "https://united.ac.in/uhack/",
  },
  {
    title: "Uhack | Hackathon",
    date: "04-05 October, 2022",
    time: "9:00 AM - 7:00 PM",
    location: "UCER Campus",
    description: "Uhack, organized by the Technovator Society of United College of Engineering and Research, was a college-level event that showcased students' innovative ideas and problem-solving skills, fostering collaboration and learning.",
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
