import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiperbox.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Images
import image1 from '../Background/image1.jpg'
import image2 from '../Background/image2.jpg'
import image3 from '../Background/image3.jpg'

function Swiperbox () {
    return (
      <div className="Swiperbox">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={image1} alt="image1" className="image"/></SwiperSlide>
          <SwiperSlide><img src={image2} alt="image2" className="image"/></SwiperSlide>
          <SwiperSlide><img src={image3} alt="image3" className="image"/></SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
        </div>
      );
    
}
export default Swiperbox;