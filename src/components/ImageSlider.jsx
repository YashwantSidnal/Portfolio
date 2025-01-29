import { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [images]);

  return (
    <div className="relative overflow-hidden h-52 sm:h-64 md:h-56 rounded-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-contain object-center transition-transform duration-700"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-highlight group-hover:bg-dark-accent bg-opacity-30 group-hover:bg-opacity-15 transition-all duration-1000"></div>
    </div>
  );
};

export default ImageSlider;
