// Slider.jsx

import React, { useState, useEffect } from 'react';
import '../Style/slider.css';

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://i.pinimg.com/736x/49/7d/85/497d85dc291a53530d79ee492e86e7a7.jpg',
    'https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg',
    'https://img.freepik.com/free-photo/business-hands-joined-together-teamwork_53876-14936.jpg',
    // Add more image file names if needed
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    // Auto transition to the next image every 3 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="slidercontainer">
      <button onClick={prevImage}>&lt;</button>
      <img className='sliderimage' src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      
    </div>
  );
};

export default Slider;
