import React, { Component } from 'react';
import './Navbar.css';
import Cart from './Cart/Cart';
import SearchField from 'react-search-field';
import Imagecart from '../Background/imagecart.png'
import Iconlogo from '../Background/iconlogin.png'
import Backdrop from './Cart/Cartbackdrop/Cartbackdrop';
import Select from 'react-select';
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 

const options = [
    { value: 'ENG', label: '🇺🇸 USA' },
    { value: 'FRA', label: '🇫🇷 FRA' },
    { value: 'SPA', label: '🇪🇸 SPA' },
    { value: 'RUS', label: '🇷🇺 RUS' },
  ]
   

class Navbar extends Component {


    state = {
        cartOpen: false,
        chatOpen : true,
        selectedOption: { value: "ENG", label: "🇺🇸 USA" },
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
      
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
        
        switch(this.state.selectedOption.value) {
          case "ENG": return ENG[0]
          break;
          case "FRA": return FRA[0]
          break;
        //   case "SPA": return SPA[0]
        //   break;
        //   case "RUS": return RUS[0]
          default: return ENG[0]
        
    }
  
}

        
    render() {
        let cart;
        let backdrop;
        if(this.state.cartOpen) {
            cart = <Cart/>
            backdrop = <Backdrop click={this.BackdropClickHandler}/>}

        const { selectedOption } = this.state;

        return (
        <div className="nav">
            <div className="texttop">
            <p className="nav-top-title">{this.ChangeLanguageEvantHandler().navtop}</p>
                    <div className="topbarlinks">
                      <div className="chat">Chat
                          <div className="chatshape"></div>
                           </div>
                           <div className="wishlist">Wishlist
                             <div className="heartshape"></div>
                          </div>                        
                          <Select className='react-select-container' classNamePrefix="react-select"
                           value={selectedOption}
                             onChange={this.handleChange}
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
                                      
                