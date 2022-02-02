import React from "react";
import "./Footer.css";
import Logo from "../Background/1.png";

const Footer = (props) => {
  return (
    <div className="foot">
      <div className="left">
        <div className="footerlogobox">
          <img className="footerlogo" src={Logo} alt="" />
          <p className="about">Exploration is our oxygen. It shapes who we are, what we stand for and what we strive for. Because the path of discovery is also a path of progression. To see the world beyond the map and reimagine what each one of us can accomplish. Since 1974, we've continually explored new ways to make a difference for each other and out planet.</p>
          {/* <p className="address">1585 Broadway, New York, NY 10019, USA</p> */}
        </div>
     
      </div>
      <div className="middle">
        <div className="topLinks">
          <li>Contact</li>
          <li>About</li>
          <li>services</li>
          <li>Shopping & Returns</li>
          <li>Privacy Policy</li>
          <li>Career</li>
        </div>
        <div className="topLinks2">
          <li>Locate Store</li>
          <li>Cookies Policy</li>
        </div>
        <div className="sendIt">
          <input className="inptFoot" type="text" placeholder="Email Address" />
          <button className="btnFoot">Subscribe Now</button>
        </div>
        <div className="footersocial">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="facebook"></div>
          </a>

          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="insta"></div>
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="twitter"></div>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Google%2B"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="google"></div>
          </a>
        </div>
        <div className="copyright">
          2022 All Rights Reserved to Alpine LLC, Designed by Shafrir Kashi
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Footer;
