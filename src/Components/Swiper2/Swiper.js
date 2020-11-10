import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Swiperbox.css'

// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Swiperbox () {
    return (
      <div className="Swiperbox" style={{marginTop: "177px"}}>
        <div className="swiperwrap1"> 
        <div className="swiperh1">sss</div>
        <Swiper
          spaceBetween={-200}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><div className="Swiper1"></div>
              sss
          </SwiperSlide>
          <SwiperSlide><div className="Swiper2"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper3"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper4"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper5"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper6"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper7"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper8"></div>
          
          </SwiperSlide>
        </Swiper>
        </div>
        </div>
      );
    
}
export default Swiperbox;