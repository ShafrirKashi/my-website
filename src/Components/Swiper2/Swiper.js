import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Swiperbox.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Swiperbox () {
    return (
      <div className="Swiperbox" style={{marginTop: "110px"}}>
        {/* <div className="swiperwrap1">  */}
        {/* <div className="swiperh1">sss</div> */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3.4}
          navigation
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><div className="Swiper1 james"></div>
              sss
          </SwiperSlide>
          <SwiperSlide><div className="Swiper2 james"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper3 james"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper4 james"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper5 james"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper6 james"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper7 james"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper8 james"></div>
          
          </SwiperSlide>
        </Swiper>
        </div>
        // </div>
      );
    
}
export default Swiperbox;