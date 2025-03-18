import React, { useState, useEffect } from 'react';
import './Hero.css';
import dark_Arrow from '../../assets/darkArrow.png';
import image1 from '../../assets/UnivImage1.jpg';
import image2 from '../../assets/UnivImage2.jpg';
import image3 from '../../assets/UnivImage3.jpg';
import image4 from '../../assets/UnivImage4.jpg';
import image5 from '../../assets/UnivImage5.jpg';

const Hero = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero container'>
      <div className="overlay"></div> {/* Transparent overlay */}
      <div className="hero-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          "Empowering Minds: Explore, Learn, Succeed" - Our educational website
          offers a dynamic platform where learners of all ages can discover a
          wealth of courses, interactive materials, and expert guidance to fuel
          their academic journey.
        </p>
        <button className='btn'>Explore more <img src={dark_Arrow} alt="" className='arrow'/></button>
      </div>
      <div className="navy-blue-overlay"></div> {/* Transparent navy blue overlay */}
    </div>
  );
};

export default Hero;
