import React from 'react';
import './Dropdown.css'


const Dropdown = (props) => {

    return (
            <div className="dropdown">
              <div className="links"></div>
              <img className="imgdrop" src={props.img} alt=""/>
            </div>
        );
    }


export default Dropdown;