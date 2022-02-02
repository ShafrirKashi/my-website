import React from 'react';
import './Dropdown.css'


const Dropdown = (props) => {

    return (
            <div className="dropdown">
              <div className="links">
                  <li className="droplink">11</li>
                  <li className="droplink">2</li>
                  <li className="droplink">3</li>
                  <li className="droplink">4</li>
              </div>
              <img className="imgdrop" src={props.img} alt=""/>
            </div>
        );
    }


export default Dropdown;