import React from 'react';

const speakers = [
  {
    name: 'Abhay Kesarwani',
    title: 'President',
    gmail: 'abhaykesarwani123@gmail.com',
    image: 'abhay.png',
  },
  {
    name: 'Rishabh Vaish',
    title: 'Vice President',
    gmail: 'rishabhvaish2002@gmail.com',
    image: 'rishabh.jpg',
  },
  {
    name: 'Shashank singh',
    title: 'Marketing & Outreach Head',
    gmail: 'shashanksinghrajput321@gmail.com',
    image: 'shashank.png',
  },
  {
    name: 'Faraz Khan',
    title: 'Technical Lead',
    gmail: 'fkassassin2001@gmail.com',
    image: 'faraz.jpg',
  },
];

const Coordinators = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100">
      <h2 className="md:text-5xl text-4xl mb-8 text-center whitetext font-bold">COORDINATORS</h2>
      <div className="container w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
          >
            <div className="w-36 h-36 mb-4">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-full border-4 border-purple-200"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center">{speaker.name}</h3>
            <p className="text-center text-gray-600">{speaker.title}</p>
            {/* <p className="mt-4 text-center text-lg font-medium">{speaker.gmail}</p> */}
            <div
              className={`h-1 mt-4 w-2/3 ${index % 2 === 0 ? 'bg-purple-400' : 'bg-orange-400'}`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coordinators;
