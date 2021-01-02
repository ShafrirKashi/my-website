import React, { useContext } from 'react';
import './Cart.css'
import {SelectContext} from '../../Selector'
import FRA from '../../Background/FRA.json' 
import ENG from '../../Background/ENG.json' 
import SPA from '../../Background/SPA.json' 
import GER from '../../Background/GER.json' 


const Cart = (props) => {

  const value = useContext(SelectContext);

  const ChangeLanguageEvantHandler = () => {
    switch(value) {
    case "ENG": return ENG
    case "FRA": return FRA
    case "SPA": return SPA
    case "GER": return GER
    default: return ENG 
   }
}



return(
  <div>
  <div className="pop">
    <h2 className="cartheader">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.CartH1}</p>})}</h2>
      <div className="productbox">
        <div className="product"></div>
      </div>
    <div className="totalbox">
      <h3 className="total">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Total}</p>})}</h3>
      <h4 className="totnumber">$1224.23</h4>
    </div>
    <div className="cartfooter">
      <div className="checkout">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Checkout}</p>})}</div>
      <div className="viewcart">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.ViewCart}</p>})}</div>
    </div>
  </div>
  </div>

);
}
export default Cart
