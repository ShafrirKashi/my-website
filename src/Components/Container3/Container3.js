import React, { useContext } from 'react';
import './Container3.css'
import Picturebox from '../Picturebox/Picturebox.js'
import {SelectContext} from '../Selector'
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 
import SPA from '../Background/SPA.json' 
import GER from '../Background/GER.json' 


const Container3 = (props) => {

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
            <div className="container3">
                <Picturebox />
            </div>
        );
    }


export default Container3;