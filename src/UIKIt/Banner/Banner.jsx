import React from 'react';
import './Banner.css'
import Vipeak from '../Vipeak/Vipeak'
import { useNavigate } from "react-router-dom";


function Banner() {
  let navigate = useNavigate();

  return (
    <div className="footop">
    <div onClick={() => {navigate("/vip")}} className="overlay">
        <div className="bannerlogo">
        <Vipeak variant="white"/>
        </div>
        <div className="textoverlay">Join And Get 10% Off</div>
    </div>
</div>
  )
}

export default Banner;