import React from "react";
import "./Vipeak.css";

const Vipeak = ({variant}) => {

  if (variant === "white"){
    return (
      <div className="vipLogoWhite"></div>
  );

  }else {return(
    <div className="vipLogoBlack"></div>

  )}
 
}

export default Vipeak;
