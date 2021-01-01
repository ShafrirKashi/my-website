import React, { useContext } from 'react';
import './Container2.css';
import {SelectContext} from '../Selector'


const FirstWrap = (props) => {
    const value = useContext(SelectContext);

        return (
            <div className="secondcontainer">
                <div className="wrap__text1"> 
                <h1 className="h1_2">Reset Warmth</h1>
                <h2 className="h2_2">Unrestricted mobility. Lightweight, packable down. <br/> The perfect winter jacket isn’t a stretch—it’s a fact.</h2>
                <button className="button2">Shop Now</button>  
                    </div> 
                
            </div>
        );
    }


export default FirstWrap;