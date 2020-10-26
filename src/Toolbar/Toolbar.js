import React, { Component } from 'react';
import './Toolbar.css';


class Toolbar extends Component {
    render() {
        return (       
            <div className="toolbar">
                <div className="logo_container"></div>
          <ul className="nav__items"> 
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Equipment</li>
            <li>Accessories</li>
          </ul>
          <div></div>
            </div>
        );
    }
}

export default Toolbar;