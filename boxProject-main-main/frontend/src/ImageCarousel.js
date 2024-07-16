import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS
import "./ImageCarousel.css";
import image1 from './IMAGE1.jpg';
import image2 from './IMAGE2.jpg';
import image3 from './IMAGE3.jpg';
import image4 from './IMAGE4.jpg';
import image5 from './IMAGE5.jpg';
import image6 from './IMAGE6.jpg';

const ImageCarousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  const imageText = [
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change images automatically every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel-container">
      <div className="image-carousel">

        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="carousel-image"
        />

      </div>
      <div className="image-text">
        <p>{imageText[currentImage]}</p>
      </div>
    </div>
  );
};

export default ImageCarousel;