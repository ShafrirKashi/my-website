import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Container2 from './Components/Container2/Container2'
import Footer from './Components/Footer/Footer'
import Container3 from './Components/Container3/Container3'
// import Container4 from './Components/Container4/Container4'
<<<<<<< HEAD
import Swiper2 from './Components/Swiper2/Swiper'
import Container1 from  './Components/Container1/Container1'
=======
// import Swiper2 from './Components/Swiper2/Swiper'
import Container1 from  './Components/Container1/Container1'
// import HeroSlider from './Components/Swiper/HeroSlider'
>>>>>>> 8658b75a504131dda7e0ce2ece01e86148544b47

function App() {
  return (
    <div className="App">  
     <div><Navbar/></div>
<<<<<<< HEAD
      <div><Container1/></div>
      <div><Container2/></div>
      <div><Container3/></div>
      <div><Swiper2 /></div>
=======
       {/* <div><HeroSlider /></div> */}
       {/* <div><Swiper2 /></div> */}
      <div><Container1/></div>
      <div><Container2/></div>
      <div><Container3/></div>
      {/* <div><Swiper/></div> */}
>>>>>>> 8658b75a504131dda7e0ce2ece01e86148544b47
      <div><Footer/></div>
    </div>
    
  );
}

export default App;
