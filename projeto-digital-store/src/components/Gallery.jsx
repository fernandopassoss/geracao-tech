import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper'; // Importando os módulos necessários
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    { src: '/home-slide-1.jpeg', alt: 'Slide 1' },
    { src: '/home-slide-2.jpeg', alt: 'Slide 2' },
    { src: '/home-slide-3.jpeg', alt: 'Slide 3' },
    { src: '/home-slide-4.jpeg', alt: 'Slide 4' },
    { src: '/home-slide-5.jpeg', alt: 'Slide 5' },
  ];

  return (
    <div className="gallery">
      {/* Slider principal */}
      <Swiper
        style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        className="main-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} className="main-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider de miniaturas */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Thumbs]}
        className="thumbs-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
