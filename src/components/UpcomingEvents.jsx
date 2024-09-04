import React from 'react';

const events = [
  {
    title: "Uhack 3.0 | Hackathon",
    date: "22-23 October",
    time: "9:00 AM - 6:00 PM",
    location: "UCER Campus",
    description: "Embark on a thrilling two-day software and hardware development Hackathon, where participants create innovative applications inspired by given themes within a defined time frame.",
    image: "hackathon.jpg",
    link: "https://united.ac.in/uhack/",
  },
  {
    title: "Workshop",
    date: "Coming Soon",
    time: "Coming Soon",
    location: "Coming Soon",
    description: "Coming Soon",
    image: "ai-workshop.jpg",
    link: "#", // Placeholder link for "Coming Soon"
  },
  {
    title: "Tech Talk: Series",
    date: "Coming Soon",
    time: "Coming Soon",
    location: "Coming Soon",
    description: "Coming Soon",
    image: "https://a2tech360.com/wp-content/uploads/2023/03/Web-TTalk23_a2spark360_TechTalk_199.jpg",
    link: "#", // Placeholder link for "Coming Soon"
  },
  {
    title: "Guest Lectures",
    date: "Coming Soon",
    time: "Coming Soon",
    location: "Coming Soon",
    description: "Coming Soon",
    image: "https://cdn.prod.website-files.com/626a518e6507e342004ee1fe/65ad78ed1febf133512ac2e7_32-Tech-Talks_Studio-BTS-231214.jpg",
    link: "#", // Placeholder link for "Coming Soon"
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-14 bg-gray-100">
      <h2 className="md:text-4xl text-3xl font-bold text-center whitetext mb-10">UPCOMING EVENTS</h2>
      <div className="container md:w-3/4 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={event.image}
                alt={`${event.title} Image`}
                className={`w-full h-48 object-cover ${index > 0 ? 'filter blur-sm' : ''}`} // Apply blur only to images except the first one
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
                    Learn More
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
