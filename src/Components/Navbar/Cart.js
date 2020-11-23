import React from 'react'
import Imagecart from '../Background/imagecart.png'
import './Cart.css'
 function Cart() {



    return (
        <div className="cartbox"> 
        <div className="imgnum">0</div>
        <img src={Imagecart} alt="asd" className="imgcart"/> 
  </div>
    )
}
