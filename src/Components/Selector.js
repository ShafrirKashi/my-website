
import React, { useState, createContext } from 'react';
import './Selector.css'
import Navbar from '../Components/Navbar/Navbar'
import Container1 from  '../Components/Container1/Container1'
import Container2 from '../Components/Container2/Container2'
import Swiper2 from '../Components/Swiper2/Swiper'
import Footer from '../Components/Footer/Footer'
import Picturebox from '../Components/Picturebox/Picturebox'
import USAF from '../Components/Background/usoa.png' 


export const SelectContext = createContext();

// const options = [
//   { value: 'ENG', label: '🇺🇸 USA' },
//   { value: 'FRA', label: '🇫🇷 FRA' },
//   { value: 'GER', label: '🇩🇪 GER' },
//   { value: 'SPA', label: '🇪🇸 SPA' },
//   { value: 'ITA', label: '🇮🇹 ITA' },
// ]
 


export const SelectProvider = (props) =>{
  const [lang, setLang] = useState ({
    value: "ENG", label: [<img src={USAF} alt="asd" className="imgflag"/>, "English"]
  });

  const handleChange = selectedOption => {
    setLang( selectedOption );
  };

 
    return (
      <SelectContext.Provider value={lang.value}>
      <Navbar triggerParent={handleChange}lang={lang}/>
      <Container1/>
      <Container2/>
      <Picturebox />
      <Swiper2/>
      <Footer/>

         </SelectContext.Provider>                    




    );
    }