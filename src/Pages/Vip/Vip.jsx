import React from "react";
import "./Vip.css";
import Vipeak from "../../UIKIt/Vipeak/Vipeak";
import Quote from "../../Components/Background/quote.png";
import Quote2 from "../../Components/Background/quote2.png";
import Join from "../../Components/Background/join.png";
import Gear from "../../Components/Background/gear.png";
import Earn from "../../Components/Background/earn.png";

function Vip() {

  const ScrollToSign = () => {
    window.scrollTo({ top: 770, behavior: "smooth" });
  };
  const ScrollToTop = () => {
    window.scrollTo({ top:0, behavior: "smooth" });
  };

  return (
    <div className="vipMain">
      <div className="vipWelcome">
        <div className="Vipeak">
          <div className="quotes">
            <img className="vipimg" src={Quote} alt="" />
            <img className="vipimg" src={Quote2} alt="" />
          </div>
          <div className="VipLogo">
            <Vipeak />
          </div>
          <h2 className="viph2">Your new route to rewards starts here.</h2>
          <h3 className="viph3">
            VIPeak™ is now active: our all-new loyalty program. Join today and{" "}
            <br></br> get 10% off your first online purchase (and so much more).
          </h3>
          <button className="vipBtn" onClick={ScrollToSign}>
            JOIN NOW
          </button>
        </div>
      </div>
      <div className="detailsWrapper">
        <div className="detailsTop">
          <p className="detailsTopP">
            <img className="detailsImg" src={Join} alt="" />
            Join VIPeak™ and get 10% off your first online purchase.
          </p>
          <p className="detailsTopP">
            <img className="detailsImg" src={Earn} alt="" />
            Earn points on every purchase and even when you explore too.
          </p>
          <p className="detailsTopP">
            <img className="detailsImg" src={Gear} alt="" />
            Get access to exclusive gear, product field testing and more.
          </p>
        </div>
        <div className="details">
          <input className="vipInput" type="text" placeholder="First Name" />
          <input className="vipInput" type="text" placeholder="Last Name" />
          <input className="vipInput" type="password" placeholder="Password" />
          <input className="vipInput" type="email" placeholder="Email Address"/>
          <input className="vipInput" type="text" placeholder="Zip Code" />
          <input className="vipInput" type="date" placeholder="Birthday DD/MM/YYYY"/>
          <input className="vipInput" type="tel" placeholder="Mobile Number" />
          <div className="check">
            <input className="vipcheck" type="checkbox" name="Mobile" />
            <label for="Mobile">Please send me emails with exclusive gear offers from The Alpine.</label>
          </div>
          <div className="check">
            <input className="vipcheck" type="checkbox" name="Mobile1" />
          <  label for="Mobile1">I agree to the VIPeak <a href="vipterms">Terms and Conditions</a></label>
          </div>
          <button className="joinBtn">JOIN NOW</button>
         
        </div>
        <div onClick={ScrollToTop} className="backtotop">BACK TO TOP</div>
      </div>
    </div>
  );
}

export default Vip;
