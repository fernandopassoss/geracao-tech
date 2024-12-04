import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import homeslide2 from '../public/home-slide-2.jpeg';
import homeslide3 from '../public/home-slide-3.jpeg';
import homeslide4 from '../public/home-slide-4.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Gallery() {


  return (
    <div className="gallery">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={homeslide2} className='slide-item'></img>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={homeslide3} className='slide-item'></img>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery;
