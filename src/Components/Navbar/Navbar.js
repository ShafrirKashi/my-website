import React from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown/Dropdown";
import Dropmen from "../Background/dropdownmen.jpg";
import Dropwomen from "../Background/dropdownwomen.jpg";
import Dropkids from "../Background/dropdownkids.jpg";
import Dropequ from "../Background/dropdownequ.jpg";
import Dropacc from "../Background/dropdownacce.jpg";
import { useNavigate } from "react-router-dom";





const Navbar = () => {

  let navigate = useNavigate();

  
  return (
    <div className="nav">
      <div onClick={() => {navigate("/vip")}} className="texttop">Join Alpine's VIPeak™ Club For 10% Off Your First Online Order
        <p className="nav-top-title"></p>
        <div className="topbarlinks">
          <div className="chat">
            <div className="chatshape"></div>
          </div>
          <div className="wishlist">
            <div className="heartshape"></div>
          </div>
        </div>
      </div>

      <div className="toolbar">
        <div onClick={() => {navigate("/")}}  className="logo_container">
          <div className="logonav"></div>
        </div>

        <ul className="nav__items">
          <li className="men">
            <div className="mendrop">
              <Dropdown img={Dropmen} />
            </div>
            Men
          </li>
          <li className="women">
            <div className="womendrop">
              <Dropdown img={Dropwomen} />
            </div>
            Women
          </li>
          <li className="kids">
            <div className="kidsdrop">
              <Dropdown img={Dropkids} />
            </div>
            Kids
          </li>
          <li className="equ">
            <div className="equdrop">
              <Dropdown img={Dropequ} />
            </div>
            Equipment
          </li>
          <li className="acc">
            <div className="accdrop">
              <Dropdown img={Dropacc} />
            </div>
            Accessories
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
