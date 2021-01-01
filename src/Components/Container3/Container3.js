import React, { useContext } from 'react';
import './Container3.css'
import Picturebox from '../Picturebox/Picturebox.js'
import {SelectContext} from '../Selector'


const Container3 = (props) => {

    const value = useContext(SelectContext);

    return (
            <div className="container3">
                <Picturebox />
            </div>
        );
    }


export default Container3;