import React, { Component } from 'react';
import './Navbar.css';
import Cart from './Cart/Cart';
import Loginbox from './Login/Loginbox';
import SearchField from 'react-search-field';
import Imagecart from '../Background/imagecart.png'
import Iconlogo from '../Background/iconlogin.png'
import Backdrop from './Cart/Cartbackdrop/Cartbackdrop';
import Select from 'react-select';
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 
import SPA from '../Background/SPA.json' 
import GER from '../Background/GER.json' 
import {SelectContext} from '../Selector'


const options = [
    { value: 'ENG', label: '🇺🇸 USA' },
    { value: 'FRA', label: '🇫🇷 FRA' },
    { value: 'SPA', label: '🇪🇸 SPA' },
    { value: 'GER', label: '🇩🇪 GER' },
  ]



class Navbar extends Component {
    static contextType = SelectContext;

    constructor(props){

        super(props)
        this.state = {
            cartOpen: false,
            chatOpen : true,
            loginboxOpen : false,
            selectedOption: { value: props.lang.value, label: props.lang.label },
        };

    }
    

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        
      };
    

   CartToggleClickHandler = () => {

    this.setState((prevState) =>{
        return {cartOpen: !prevState.cartOpen}
       })
   }
   LoginboxToggleClickHandler = () => {

    this.setState((prevState) =>{
        return {loginboxOpen: !prevState.loginboxOpen}
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
        
        switch(this.context) {
          case "ENG": return ENG
          case "FRA": return FRA
          case "SPA": return SPA
          case "GER": return GER
          default: return ENG 
    }
}



    render() {
        let cart;
        let loginbox;
        let backdrop;
        if(this.state.loginboxOpen) {
            loginbox = <Loginbox />
            backdrop = <Backdrop click={this.BackdropClickHandler}/>}
        if(this.state.cartOpen) {
            cart = <Cart/>
            backdrop = <Backdrop click={this.BackdropClickHandler}/>}
            let value = this.props.lang


        return (
        <div className="nav">
            <div className="texttop">
            <p className="nav-top-title">{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navtop}</p>})}
            </p>
                    <div className="topbarlinks">
                      <div className="chat">{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.NavtopChat}</p>})}
                          <div className="chatshape"></div>
                           </div>
                           <div className="wishlist">{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.NavtopWishlist}</p>})}
                             <div className="heartshape"></div>
                          </div>                        
                          <Select className='react-select-container' classNamePrefix="react-select"
                           value={value}
                           onChange={this.props.triggerParent}
                              options={options}
                              closeMenuOnSelect={true}
                             theme={theme => ({...theme,borderRadius: 0,colors: {...theme.colors,primary25: "gray",},
                             })}/>                       
                </div>
            </div> 
            <div className="toolbar">

                <div className="logo_container">
                    <div className="logonav"></div>
                </div>

                <ul className="nav__items"> 
                     <li>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks1}</p>})}</li>
                     <li>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks2}</p>})}</li>
                      <li>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks3}</p>})}</li>
                      <li>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks4}</p>})}</li>
                      <li>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks5}</p>})}</li>                
                </ul> 

                <div className="searchboxwrapper">           
                      <SearchField placeholder='Search item...'/>
                </div>

                <div className="accessbar">
                    <div className="loginbox" onClick={this.LoginboxToggleClickHandler}>
                    <img src={Iconlogo} alt="dsa" className="imglogin" /> 

                    </div>
                        <div className="cartbox" onClick={this.CartToggleClickHandler}> 
                          <div className="imgnum">0</div>
                          <img src={Imagecart} alt="asd" className="imgcart"/> 
                        </div>
                </div>

            </div> 
            {backdrop}
            {cart}
            {loginbox}
          

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
                                      
                