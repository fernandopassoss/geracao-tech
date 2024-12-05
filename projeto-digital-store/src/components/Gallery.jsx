import React, { useEffect, useState } from 'react';
import '../styles/Gallery.scss';
import homeslide1 from '../public/home-slide-1.jpeg';
import homeslide2 from '../public/home-slide-2.jpeg';
import homeslide3 from '../public/home-slide-3.jpeg';
import homeslide4 from '../public/home-slide-4.jpeg';
import homeslide5 from '../public/home-slide-5.jpeg';
import homeslide6 from '../public/home-slide-6.jpeg';
import homeslide7 from '../public/home-slide-7.jpeg';
import homeslide8 from '../public/home-slide-8.jpeg';

function Gallery() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    homeslide1,
    homeslide2,
    homeslide3,
    homeslide4,
    homeslide5,
    homeslide6
  ];

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="gallery" style={{ backgroundColor: '#F9F8FE' }}>
    
      <div className="gallery-slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`gallery-mySlides fade ${index === slideIndex ? 'active' : ''}`}
            style={{ display: index === slideIndex ? 'block' : 'none' }}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="gallery-imagens" />
          </div>
        ))}
      </div>

      
      <div className="gallery-thumbnails">
        {slides.map((slide, index) => (
          index < 5 &&(
          <img
            key={index}
            src={slide}
            alt={`Thumbnail ${index + 1}`}
            className={`gallery-thumbnail ${index === slideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
          )
        ))}
      </div>
    </div>
  );
}

export default Gallery;
