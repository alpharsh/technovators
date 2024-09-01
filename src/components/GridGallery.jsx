import React from 'react';

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
    <section className="py-12 bg-gray-100">
      <h2 className="text-5xl mb-10 text-center font-bold whitetext">GALLERY</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="grid grid-rows-2 gap-4">
            <img
              src={images[0]}
              alt="Gallery Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[1]}
              alt="Gallery Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-rows-3 gap-4">
            <img
              src={images[2]}
              alt="Gallery Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[3]}
              alt="Gallery Image 4"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[4]}
              alt="Gallery Image 5"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <img
              src={images[5]}
              alt="Gallery Image 6"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[6]}
              alt="Gallery Image 7"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-rows-3 gap-4">
            <img
              src={images[7]}
              alt="Gallery Image 8"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[8]}
              alt="Gallery Image 9"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[9]}
              alt="Gallery Image 10"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridGallery;
