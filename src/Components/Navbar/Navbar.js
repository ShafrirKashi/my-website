import React, { Component } from 'react';
import './Navbar.css';
import image8 from '../Background/image8.png'


class Vipline extends Component {
    render() {
        return (
            <div className="both">
            <div className="text">
                Join Alpine's VIPeak™ Club For 10% Off Your First Online Order
            </div> 
            <div className="toolbar">
                <div className="logo_container"></div>
              <ul className="nav__items"> 
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Equipment</li>
                <li>Accessories</li>
             </ul>  
             <div className="cartbox">
                 <img src={image8} alt="cart logo" className="cartlogo"/>
                 <div className="cartboxtext">Cart</div>
                 </div>       
            </div> 
        </div>
        );
    }
}

export default Vipline;