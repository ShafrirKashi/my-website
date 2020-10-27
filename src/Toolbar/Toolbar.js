import React, { Component } from 'react';
import './Toolbar.css';
import Searchbar from '../Searchbar/Searchbar'


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
               <div className="Search__bar"><Searchbar/></div>           
            </div>
        );
    }
}

export default Toolbar;