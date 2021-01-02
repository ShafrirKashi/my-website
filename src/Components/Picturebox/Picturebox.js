import React, { useContext } from 'react';
import './Picturebox.css'
import {SelectContext} from '../Selector'
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 
import SPA from '../Background/SPA.json' 
import GER from '../Background/GER.json' 

const Picturebox = (props) => {

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
        <div className="container3grid">
            <div className="box1">
                <div className="box1text">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Conatiner3Large}</p>})}</div>
                <a href="22" className="buttonbox1">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.ShopNow}</p>})}</a>
            </div>
            <div className="box2">
                <div className="box2text">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Conatiner3Medium}</p>})}</div>
                <a href="33" className="buttonbox2">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.ShopNow}</p>})}</a>
            </div>
            <div className="box3">           
                <a href="44" className="buttonbox3">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Conatiner3WShop}</p>})}</a>
            </div>
            <div className="box4">
                <a href="55" className="buttonbox4">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Conatiner3MShop}</p>})}</a>
            </div>
        </div>   
        );
    }


export default Picturebox;