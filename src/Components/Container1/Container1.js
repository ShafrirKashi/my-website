import React, { useContext } from 'react';
import './Container1.css'
import {SelectContext} from '../Selector'
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 
import SPA from '../Background/SPA.json' 
import GER from '../Background/GER.json' 

const Container1 = (props) => {

 const value = useContext(SelectContext);

const ChangeLanguageEvantHandler = () => {
    switch(value) {
    case "ENG": return ENG
    case "FRA": return FRA
    case "SPA": return SPA
    case "GER": return GER
    default: return ENG 
   }
}
        return (

            <div>
                <div className="container1image">
                  <div className="textdiv1">
                    <h1 className="h1">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Conatiner1H1}</p>})}</h1>   
                    <h2 className="h2">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Conatiner1H2}</p>})}</h2>
                    <a href="22" className="button1">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.ShopNow}</p>})}</a>
                  </div>
                </div>
            </div>
        );
}


export default Container1;