import React from 'react';
import './Dropdown.css'
// import Dropmen from '../../Background/dropdownmen.jpg' 


const Dropdown = (props) => {

    return (
            <div className="dropdown">
              <div className="links"></div>
              <img src={props.img} alt=""/>
            </div>
        );
    }


export default Dropdown;