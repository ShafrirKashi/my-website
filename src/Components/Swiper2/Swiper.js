import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Data from '../Background/MOCK_DATA.json' 
import './Swiper.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Swiperbox () {
    return (
      <div className="swiperboks">
     
        <Swiper
          spaceBetween={20}
          slidesPerView={3.3}
          navigation
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><div className="Swiper1 swipers"></div>
          <p className="swiper-title">{Data[0].title}</p>
          <p className="swiper-type">{Data[0].type}</p>
          <p className="swiper-price">{Data[0].price}</p>

          </SwiperSlide>
          <SwiperSlide><div className="Swiper2 swipers"></div>
          <p className="swiper-title">{Data[1].title}</p>
          <p className="swiper-type">{Data[1].type}</p>
          <p className="swiper-price">{Data[1].price}</p>

          </SwiperSlide>
          <SwiperSlide><div className="Swiper3 swipers"></div>
          <p className="swiper-title">{Data[2].title}</p>
          <p className="swiper-type">{Data[2].type}</p>
          <p className="swiper-price">{Data[2].price}</p>

          </SwiperSlide>
          <SwiperSlide><div className="Swiper4 swipers"></div>
          <p className="swiper-title">{Data[3].title}</p>
          <p className="swiper-type">{Data[3].type}</p>
          <p className="swiper-price">{Data[3].price}</p>

          </SwiperSlide>
          <SwiperSlide><div className="Swiper5 swipers"></div>
          <p className="swiper-title">{Data[4].title}</p>
          <p className="swiper-type">{Data[4].type}</p>
          <p className="swiper-price">{Data[4].price}</p>

          </SwiperSlide>
          <SwiperSlide><div className="Swiper6 swipers"></div>
          <p className="swiper-title">{Data[5].title}</p>
          <p className="swiper-type">{Data[5].type}</p>
          <p className="swiper-price">{Data[5].price}</p>

          </SwiperSlide>
          <SwiperSlide><div className="Swiper7 swipers"></div>
          <p className="swiper-title">{Data[6].title}</p>
          <p className="swiper-type">{Data[6].type}</p>
          <p className="swiper-price">{Data[6].price}</p>

          </SwiperSlide>
          <SwiperSlide><div className="Swiper8 swipers"></div>
          <p className="swiper-title">{Data[7].title}</p>
          <p className="swiper-type">{Data[7].type}</p>
          <p className="swiper-price">{Data[7].price}</p>

          </SwiperSlide>
        </Swiper>
        </div>
        // </div>
      );
    
}
export default Swiperbox;