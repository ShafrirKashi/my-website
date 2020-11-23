import React, { Component } from 'react';
import './Navbar.css';
import Cart from './Cart/Cart';
import SearchField from 'react-search-field';
import Imagecart from '../Background/imagecart.png'
import Iconlogo from '../Background/iconlogin.png'
import Backdrop from './Cart/Cartbackdrop/Cartbackdrop';

class Navbar extends Component {
    state = {
        cartOpen: false
    };

   CartToggleClickHandler = () => {

    this.setState((prevState) =>{
        return {cartOpen: !prevState.cartOpen}
       })
   }
   BackdropClickHandler = () => {

    this.setState({cartOpen: false}
     );
   }

    render() {

        let cart;
        let backdrop;

        if(this.state.cartOpen) {
            cart = <Cart/>
            backdrop = <Backdrop click={this.BackdropClickHandler}/>
        }

        return (
  <div className="both">
            <div className="texttop">
                Join Alpine's VIPeak™ Club For 10% Off Your First Online Order
            </div> 
            <div className="toolbar">

                <div className="logo_container">
                    <div className="logonav"></div>
                </div>

                <ul className="nav__items"> 
                     <li>Men</li>
                     <li>Women</li>
                      <li>Kids</li>
                      <li>Equipment</li>
                      <li>Accessories</li>                
                </ul> 

                <div className="searchboxwrapper">           
                      <SearchField placeholder='Search item...'/>
                </div>

                <div className="accessbar">
                    <img src={Iconlogo} alt="dsa" className="imglogin"/> 
                        <div className="cartbox" onClick={this.CartToggleClickHandler}> 
                          <div className="imgnum">0</div>
                          <img src={Imagecart} alt="asd" className="imgcart"/> 
                        </div>
                </div>

            </div> 
            {backdrop}
            {cart}
         <div className="chatobot"></div>
    </div>
        );
    }
}

export default Navbar;
                                      
                