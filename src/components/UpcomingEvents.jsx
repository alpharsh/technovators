import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const events = [
  {
    title: "Tech Talks: A Journey through DEVOPS",
    date: "06 October, 2024",
    time: "4:00 PM - 5:00 PM (Tentative)",
    location: "Online",
    description: "Join us on October 6, 2024, for an online session with Prateek Singh from Fountane Inc. Explore DevOps principles, including continuous integration and deployment. Learn best practices and tools from industry experts to boost productivity in software development. Connect with peers and deepen your DevOps knowledge!",
    image: "techtalk.jpg",
    link: "#",
  },
  {
    title: "Uhack 3.0 | Hackathon",
    date: "22-23 October, 2024",
    time: "9:00 AM - 7:00 PM",
    location: "UCER Campus",
    description: "Embark on a thrilling two-day software and hardware development Hackathon, where participants create innovative applications inspired by given themes within a defined time frame.",
    image: "hackathon.jpg",
    link: "#",
  },
  {
    title: "Workshop",
    date: "Coming Soon",
    time: "9:00 AM - 4:00 PM",
    location: "UCER Campus",
    description: "Join our exclusive AI Workshop for members. Learn the latest in AI, participate in hands-on sessions, and network with industry experts. Enhance your skills and connect with peers.",
    image: "ai-workshop.jpg",
    link: "#", // Placeholder link for "Coming Soon"
  },
  // {
  //   title: "Tech Talk: Series",
  //   date: "November 2024",
  //   time: "9:00 AM - 4:00 PM",
  //   location: "UCER Campus",
  //   description: "Join our exclusive Talk Series by industry experts on cutting-edge technologies, trends, and professional development. Open to members only, this series offers valuable insights and career advancement opportunities.",
  //   image: "techtalk.jpg",
  //   link: "#", // Placeholder link for "Coming Soon"
  // },
  {
    title: "Guest Lectures",
    date: "Coming Soon",
    time: "Coming Soon",
    location: "Coming Soon",
    // description: "Coming Soon",
    image: "guest.jpg",
    link: "#", // Placeholder link for "Coming Soon"
  },
];

const UpcomingEvents = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-14 bg-gray-100">
      <h2 className="md:text-4xl text-3xl font-bold text-center whitetext mb-10">UPCOMING EVENTS</h2>
      <div className="container md:w-3/4 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden" data-aos="fade-up">
              <img
                src={event.image}
                alt={`${event.title} Image`}
                className={`w-full h-48 object-cover ${index > 1 ? 'filter blur-sm' : ''}`} // Apply blur only to images except the given no. one
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
                {event.link !== "#" && (
                  <a
                    href={event.link}
                    target='_blank'
                    rel="noreferrer"
                    className="mt-4 inline-block bg-gradient-to-r from-purple-400 to-orange-400 text-white px-4 py-1 rounded-3xl hover:bg-blue-600 transition-all duration-500 bg-[length:100%_100%] ease-in-out hover:bg-[length:180%_180%]"
                  >
                    Register
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
