import React from 'react';
import './App.css';

//Components

import Navbar from './Components/Navbar/Navbar'
import Container1 from  './Components/Container1/Container1'
import Container2 from './Components/Container2/Container2'
import Container3 from './Components/Container3/Container3'
import Swiper2 from './Components/Swiper2/Swiper'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <div className="App">  
     <div><Navbar/></div>
      <div><Container1/></div>
      <div><Container2/></div>
      <div><Container3/></div>
      <div><Swiper2/></div> 
      <div><Footer/></div>
    </div>
    
  );
}

export default App;
