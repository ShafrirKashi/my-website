import React from 'react'
import './Cart.css'
import Backdrop from './Cartbackdrop/Cartbackdrop'



const Cart = props => (
 <div>
  <div className="pop">
    <h2 className="cartheader">Shopping Cart</h2>
      <div className="productbox">
        <div className="product"></div>
      </div>
    <div className="totalbox">
      <h3 className="total">Total</h3>
      <h4 className="totnumber">$124.23</h4>
    </div>
    <div className="cartfooter">
      <div className="checkout">Checkout</div>
      <div className="viewcart">View cart</div>
    </div>
  </div>
  <Backdrop />
  </div>
  

  




);

export default Cart
