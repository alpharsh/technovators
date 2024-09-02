import React from "react";

const images = [
  "pics/img1.jpg",
  "pics/img2.jpg",
  "pics/img3.jpg",
  "pics/img4.jpg",
  "pics/img5.jpg",
  "pics/img6.jpg",
  "pics/img7.jpg",
  "pics/img8.jpg",
  "pics/img9.jpg",
  "pics/img10.jpg",
];

const GridGallery = () => {
  return (
    <section className="md:py-14 py-10 pb-14 bg-gray-200">
      <h2 className="text-5xl md:mb-14 mb-10 text-center font-bold whitetext">
        GALLERY
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="grid grid-rows-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[0]}
                loading="lazy"
                alt="Gallery Image 1"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[1]}
                loading="lazy"
                alt="Gallery Image 2"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="grid grid-rows-3 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[2]}
                loading="lazy"
                alt="Gallery Image 3"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[3]}
                loading="lazy"
                alt="Gallery Image 4"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[4]}
                loading="lazy"
                alt="Gallery Image 5"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[5]}
                loading="lazy"
                alt="Gallery Image 6"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[6]}
                loading="lazy"
                alt="Gallery Image 7"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="grid grid-rows-3 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[7]}
                loading="lazy"
                alt="Gallery Image 8"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[8]}
                loading="lazy"
                alt="Gallery Image 9"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[9]}
                loading="lazy"
                alt="Gallery Image 10"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridGallery;
