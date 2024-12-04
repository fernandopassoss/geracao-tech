import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import '../styles/Gallery.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Gallery() {

  const imagens =[
    {imagem: require('../public/produc-image-1.jpeg')},
    {imagem: require('../public/produc-image-2.jpeg')},
    {imagem: require('../public/produc-image-3.jpeg')}
]
  
  return (
    <div className="gallery">
        <Swiper
        slidesPerView={1}
        navigation  
        pagination={{clickable:true}}
        scrollbar={{draggable:true}}
      
        >   
          {imagens.map((item)=>(
            <SwiperSlide key={item.id}>
              <img src={item.imagem} alt='Slider' className='slide-item'></img>
        
              </SwiperSlide>
          ))}
          
        </Swiper>
    </div>
  );
}

export default Gallery;
