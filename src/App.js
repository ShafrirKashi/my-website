import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Container2 from './Components/Container2/Container2'
import Footer from './Components/Footer/Footer'
import Container3 from './Components/Container3/Container3'
// import Container4 from './Components/Container4/Container4'
import Swiper from './Components/Swiper/Swiper'
import Container1 from  './Components/Container1/Container1'
import HeroSlider from './Components/Swiper/HeroSlider'

function App() {
  return (
    <div className="App">  
     <div><Navbar/></div>
       <div><HeroSlider /></div>
      <div><Container1/></div>
      <div><Container2/></div>
      <div><Container3/></div>
      <div><Swiper/></div>
      <div><Footer/></div>
    </div>
    
  );
}

export default App;
