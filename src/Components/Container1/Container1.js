import React, { useContext } from 'react';
import './Container1.css'
import {SelectContext} from '../Selector'

const Container1 = (props) => {

 const value = useContext(SelectContext);
     
        return (

            <div>
                <div className="container1image">
                  <div className="textdiv1">
                    {/* <h1 className="h1">Winter Is Coming</h1>    */}
                    <h1 className="h1">{value}</h1>                  
                    <h2 className="h2">Built for unforgiving conditions. 
                    <br/>Trusted by athletes across the globe.</h2>
                    <a href="22" className="button1">Shop Now</a>
                  </div>
                </div>
            </div>
        );
    }


export default Container1;