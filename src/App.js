import React, { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar'
import Container1 from  './Components/Container1/Container1'
import Container2 from './Components/Container2/Container2'
import Container3 from './Components/Container3/Container3'
import Swiper2 from './Components/Swiper2/Swiper'
import Footer from './Components/Footer/Footer'



const App = props => {

const [Lang, setLang] = useState ({

    value: "ENG",
    label: "🇺🇸 USA" 

});


const handleChange = selectedOption => {
  setLang({ selectedOption });
};

const selectedOption  = handleChange.setLang;




  return (
    <div className="App">  
      <p>{setLang.value}</p>
      <div className="asd"><Navbar triggerParentUpdate={handleChange}/></div>
      <Container1/>
      <Container2/>
      <Container3/>
      <Swiper2/>
      <Footer/>
    </div>
    
  );
}

export default App;
