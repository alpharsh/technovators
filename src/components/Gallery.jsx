import React, { useEffect, useState } from "react";

const images = [
  "pics/INC-8449.jpg",
  "pics/INC-7458.jpg",
  "pics/INC-7727.jpg",
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

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="md:py-14 py-10 pb-14 bg-gray-200">
      <h2 className="text-5xl md:mb-14 mb-10 text-center font-bold whitetext">
        GALLERY
      </h2>
      <div className="relative md:w-3/4 flex mx-auto items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 z-10 p-1 md:p-2 bg-white/60 rounded-full shadow-md focus:outline-none hover:bg-gray-200"
        >
          &#9664;
        </button>

        <div className="overflow-hidden w-full md:w-4/5 md:rounded-2xl">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-72 md:h-[550px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 z-10 p-1 md:p-2 bg-white/60 rounded-full shadow-md focus:outline-none hover:bg-gray-200"
        >
          &#9654;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 mx-1 rounded-full focus:outline-none ${
              currentIndex === index ? "bg-orange-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
