import React from 'react';

const sponsors = [
  {
    name: "Institution's Innovation Council",
    logo: 'sp1.png',
    link: 'https://iic.mic.gov.in/',
  },
  {
    name: 'Image Nclix',
    logo: 'sp2.png',
    link: 'https://www.imagenclix.com/',
  },
  {
    name: 'Bharat News',
    logo: 'sp3.png',
    link: 'https://www.bharatnews.com/',
  },
  {
    name: 'Vishal Finance & Insurance Hub',
    logo: 'sp4.png',
    link: 'https://www.vishalfinance.com/',
  },
];

const Sponsors = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#ffc99a] via-[#ffd8bb] to-[#fdd7b7]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">SPONSORS</h2>
        <div className="h-1 w-16 bg-blue-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <a href={sponsor.link} key={sponsor.name} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} className="mx-auto h-24 transform transition-transform duration-300 hover:scale-110"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
