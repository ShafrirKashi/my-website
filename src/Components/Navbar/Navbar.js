import React, { Component } from 'react';
import './Navbar.css';
import Cart from './Cart/Cart';
import SearchField from 'react-search-field';
import Imagecart from '../Background/imagecart.png'
import Iconlogo from '../Background/iconlogin.png'
import Backdrop from './Cart/Cartbackdrop/Cartbackdrop';
import Selector from './Select/Select';
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 


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

    ChatRemoveClickHandler = () => {
        
        this.setState({ chatOpen: false }
        );
    }

    ChangeLanguageEvantHandler = () => {
        
        switch(sessionStorage.getItem ("Language")) {
          case "ENG": return ENG[0]
          break;
          case "FRA": return FRA[0]
          break;
        //   case "GER": return GER[0]
          default: return ENG[0]
        
    }
  
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

           

            <p className="nav-top-title">{this.ChangeLanguageEvantHandler().Navtop}</p>


            

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
                    <div className="chatboxX" onClick={this.ChatRemoveClickHandler}></div>
                  </div>
                </div>:null}
        </div>
        );
    }
}

export default Navbar;
                                      
                