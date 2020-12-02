import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Swiperbox.css'
import Data from '../Background/MOCK_DATA.json' 

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

          {Data.map((dataIndex, index)=>{
              return <p>{dataIndex.value}</p>})}

          </SwiperSlide>
          <SwiperSlide><div className="Swiper2 swipers"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper3 swipers"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper4 swipers"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper5 swipers"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper6 swipers"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper7 swipers"></div>
          
          </SwiperSlide>
          <SwiperSlide><div className="Swiper8 swipers"></div>
          
          </SwiperSlide>
        </Swiper>
        </div>
        // </div>
      );
    
}
export default Swiperbox;