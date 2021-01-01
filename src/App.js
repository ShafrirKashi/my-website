import React, { useState } from 'react';

import Navbar from './Components/Navbar/Navbar'
import Container1 from  './Components/Container1/Container1'
import Container2 from './Components/Container2/Container2'
import Container3 from './Components/Container3/Container3'
import Swiper2 from './Components/Swiper2/Swiper'
import Footer from './Components/Footer/Footer'



const App = props => {

const [lang, setLang] = useState ({

  value: 'ENG', label: '🇺🇸 USA'

});


const handleChange = selectedOption => {
  setLang(selectedOption);
};





  return (
    <div className="App">  
      <Navbar style={{position: "-webkit-sticky"}}triggerParent={handleChange}lang={lang}/>
      <Container1/>
      <Container2/>
      <Container3/>
      <Swiper2/>
      <Footer/>
    </div>
    
  );
}

export default App;
