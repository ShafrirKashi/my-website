import React, { Component } from 'react';
import './Navbar.css';
import Cart from './Cart/Cart';
import SearchField from 'react-search-field';
import Imagecart from '../Background/imagecart.png'
import Iconlogo from '../Background/iconlogin.png'
import Backdrop from './Cart/Cartbackdrop/Cartbackdrop';
import Selector from './Select/Select';


class Navbar extends Component {
    state = {
        cartOpen: false,
        chatOpen : true
    };

    

   CartToggleClickHandler = () => {

    this.setState((prevState) =>{
        return {cartOpen: !prevState.cartOpen}
       })
   }

   BackdropClickHandler = () => {

    setTimeout(() => {
        this.setState({cartOpen: false})}, 200
        );
    }

    ChatremoveClickHandler = () => {
        
        this.setState({ chatOpen: false }
        );
    }
 
 
    render() {
        let cart;
        let backdrop;

        if(this.state.cartOpen) {
            cart = <Cart/>
            backdrop = <Backdrop click={this.BackdropClickHandler}/>}

        return (
        <div className="nav">
            <div className="texttop">
                Join Alpine's VIPeak™ Club For 10% Off Your First Online Order
                <div className="topbarlinks">
                           <div className="chat">Chat
                             <div className="chatshape"></div>
                           </div>
                           <div className="wishlist">Wishlist
                             <div className="heartshape"></div>
                          </div>
                         
                          <Selector />
                

                         
                </div>
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
                        <div className="cartbox" onMouseEnter={this.CartToggleClickHandler}> 
                          <div className="imgnum">0</div>
                          <img src={Imagecart} alt="asd" className="imgcart"/> 
                        </div>
                </div>

            </div> 
            {backdrop}
            {cart}

            {this.state.chatOpen?
                <div className="chatobot">
                  <div className="chatboxclosecircle">
                    <div className="chatboxX" onClick={this.ChatremoveClickHandler}></div>
                  </div>
                </div>:null}
        </div>
        );
    }
}

export default Navbar;
                                      
                