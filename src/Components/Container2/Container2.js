import React, { useContext } from 'react';
import './Container2.css';
import {SelectContext} from '../Selector'
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 
import SPA from '../Background/SPA.json' 
import GER from '../Background/GER.json' 


const FirstWrap = (props) => {
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
            <div className="secondcontainer">
                {/* <div className="wrap__text1">  */}
                <h1 className="h1_2">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Conatiner2H1}</p>})}</h1>
                <h2 className="h2_2">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Conatiner2H2}</p>})}</h2>
                <button className="button2">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.ShopNow}</p>})}</button>  
                    {/* </div>  */}
                
            </div>
        );
    }


export default FirstWrap;