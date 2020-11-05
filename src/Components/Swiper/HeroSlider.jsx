import React, {useState} from 'react';

// React ID Swiper
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper';

import './HeroSlider.css'

// Images
import image1 from '../Background/image1.jpg'
import image2 from '../Background/image2.jpg'
import image3 from '../Background/image3.jpg'

import { Parallax } from 'swiper';

// Slider Configuation Options 

const  HeroSliderConfigs = {
containerclass:"swiper-container hero-slider",
parallax: true,
centeredSlides:true,
speed:500,
spaceBetween:0,
effect: 'slide'
};

// Slider Componant

const HeroSlider = () => {
    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const  parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.5;
    var swiper = new Swiper('.swiper-container', {pagination: {el: '.swiper-pagination',},});

return( 

    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        <div className="hero-slide">

          <div className="slide-image" data-swiper-parallax={parallaxAmount} 
               data-swiper-parallax-opacity= {parallaxOpacity}>
            <img src={image1} alt="image1" className="image"/>
              <div className="textonslider">
                <h1 className="text-uppercase mb-2 font-weight-bold"> Slide 1</h1>
                  <p className="mb-5 small">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Laborum adipisci assumenda nostrum id, quae asperiores ratione accusamus possimus dolorem
              cumque minus doloremque quis quas modi, placeat eligendi impedit debitis harum?</p>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
         </div>
      
    </div>
    {/* 2 */}
    <div className="hero-slide">

        <div className="slide-image" data-swiper-parallax={parallaxAmount} 
        data-swiper-parallax-opacity= {parallaxOpacity}>
            <img src={image2} alt="image2" className="image"/>
              <div className="textonslider">
                <h1 className="text-uppercase mb-2 font-weight-bold"> Slide 1</h1>
                  <p className="mb-5 small">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Laborum adipisci assumenda nostrum id, quae asperiores ratione accusamus possimus dolorem
              cumque minus doloremque quis quas modi, placeat eligendi impedit debitis harum?</p>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
       
    </div>
    {/* 3 */}
    <div className="hero-slide">

        <div className="slide-image" data-swiper-parallax={parallaxAmount} 
        data-swiper-parallax-opacity= {parallaxOpacity}>
            <img src={image3} alt="image3" className="image"/>
            <div className="textonslider">
            <h1 className="text-uppercase mb-2 font-weight-bold"> Slide 1</h1>
            <p className="mb-5 small">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Laborum adipisci assumenda nostrum id, quae asperiores ratione accusamus possimus dolorem
              cumque minus doloremque quis quas modi, placeat eligendi impedit debitis harum?</p>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
      
    </div>
</Swiper>
)
};

export default HeroSlider;
