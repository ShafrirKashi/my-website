
import React, { useState, createContext } from 'react';
import './Selector.css'
import Select from 'react-select';
import Navbar from '../Components/Navbar/Navbar'
import Container1 from  '../Components/Container1/Container1'
import Container2 from '../Components/Container2/Container2'
import Container3 from '../Components/Container3/Container3'
import Swiper2 from '../Components/Swiper2/Swiper'
import Footer from '../Components/Footer/Footer'

export const SelectContext = createContext();

const options = [
  { value: 'ENG', label: '🇺🇸 USA' },
  { value: 'FRA', label: '🇫🇷 FRA' },
  { value: 'GER', label: '🇩🇪 GER' },
  { value: 'SPA', label: '🇪🇸 SPA' },
  { value: 'ITA', label: '🇮🇹 ITA' },
]
 


export const SelectProvider = (props) =>{
  const [lang, setLang] = useState ({
    value: "ENG", label: "🇺🇸 USA" 
  });

  const handleChange = selectedOption => {
    setLang( selectedOption );

  
  };

  

    return (
      <SelectContext.Provider value={lang.value}>
      <Navbar triggerParent={handleChange}lang={lang}/>
      <Container1/>
      <Container2/>
      <Container3/>
      <Swiper2/>
      <Footer/>
     
         </SelectContext.Provider>                    




    );
    }