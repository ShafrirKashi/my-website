import React from 'react';
import './App.css';
import {SelectProvider} from'./SelectContext'

import Navbar from './Components/Navbar/Navbar'
import Container1 from  './Components/Container1/Container1'
import Container2 from './Components/Container2/Container2'
import Container3 from './Components/Container3/Container3'
import Swiper2 from './Components/Swiper2/Swiper'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <SelectProvider>
    <div className="App">  
      <div className="asd"><Navbar/></div>
      <Container1/>
      <Container2/>
      <Container3/>
      <Swiper2/>
      <Footer/>
    </div>
    </SelectProvider>
    
  );
}

export default App;
