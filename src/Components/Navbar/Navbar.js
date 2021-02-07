import React, { Component } from 'react';
import './Navbar.css';
import Cart from './Cart/Cart';
import Loginbox from './Login/Loginbox';
// import SearchField from 'react-search-field';
import Imagecart from '../Background/imagecart.png'
import Iconlogo from '../Background/iconlogin.png'
import Backdrop from './Cart/Cartbackdrop/Cartbackdrop';
import Select from 'react-select';
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 
import SPA from '../Background/SPA.json' 
import GER from '../Background/GER.json' 
import {SelectContext} from '../Selector'
import USAF from '../Background/usoa.png' 
import GERF from '../Background/germany.png' 
import FRAF from '../Background/france.png' 
import SPAF from '../Background/spain.png' 
import Dropdown from './Dropdown/Dropdown'
import Dropmen from '../Background/dropdownmen.jpg' 
import Dropwomen from '../Background/dropdownwomen.jpg' 
import Dropkids from '../Background/dropdownkids.jpg' 
import Dropequ from '../Background/dropdownequ.jpg' 
import Dropacc from '../Background/dropdownacce.jpg' 






const options = [
    { value: 'ENG', label:  [<img src={USAF} alt="asd" className="imgflag"/>, "English"]},
    { value: 'FRA', label:  [<img src={FRAF} alt="asd" className="imgflag"/>, "France"]},
    { value: 'SPA', label:  [<img src={SPAF} alt="asd" className="imgflag"/>, "Spanish"]},
    { value: 'GER', label:  [<img src={GERF} alt="asd" className="imgflag"/>, "German"]},
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
            dropmenOpen: false,
            dropwomenOpen: false,
            dropkidsOpen: false,
            dropequOpen: false,
            dropaccOpen: false,
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
        let dropmen;
        let dropwomen;
        let dropkids;
        let dropequ;
        let dropacc;
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
 <p className="nav-top-title">{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navtop}</p>})}</p>
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
     <li className="men"><div className="mendrop"><Dropdown img={Dropmen}/></div>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks1}</p>})}</li>
     <li className="women"><div className="womendrop"><Dropdown img={Dropwomen}/></div>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks2}</p>})}</li>
      <li className="kids"><div className="kidsdrop"><Dropdown img={Dropkids}/></div>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks3}</p>})}</li>
      <li className="equ"><div className="equdrop"><Dropdown img={Dropequ}/></div>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks4}</p>})}</li>
      <li className="acc"><div className="accdrop"><Dropdown img={Dropacc}/></div>{this.ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Navlinks5}</p>})}</li>                
      
</ul> 

<div className="searchboxwrapper">           
      {/* <SearchField placeholder='Search item...'/> */}
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
{/* <Dropdown img={Dropmen}/> */}

           
            {backdrop}
            {cart}
            {loginbox}
            {dropmen}
            {dropwomen}
            {dropkids}
            {dropequ}
            {dropacc}

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
                                      
                