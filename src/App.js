import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Container1 from  './Components/Container1/Container1'
import Container2 from './Components/Container2/Container2'
import Swiper2 from './Components/Swiper2/Swiper'
import Footer from './Components/Footer/Footer'
import Picturebox from './Components/Picturebox/Picturebox'
import { SelectProvider } from './Components/Selector'


 const App = props => {

const [lang, setLang] = useState ({

  value: 'ENG', label: '🇺🇸 USA'

});


const handleChange = selectedOption => {
  setLang(selectedOption);
};





  return (
    <SelectProvider>
      <Navbar style={{position: "-webkit-sticky"}}
      triggerParent={handleChange}lang={lang}/>
      <Container1/>
      <Container2/>
      <Picturebox />
      <Swiper2/>
      <Footer/>
    </SelectProvider>
  );
}

export default App;
