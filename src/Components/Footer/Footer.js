import React, { useContext } from 'react';
import './Footer.css'
import SearchField from 'react-search-field';
import {SelectContext} from '../Selector'
import FRA from '../Background/FRA.json' 
import ENG from '../Background/ENG.json' 
import SPA from '../Background/SPA.json' 
import GER from '../Background/GER.json' 





const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'}); };


    const Footer = (props) => {

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




        return (
            <div className="foot">
                <div className="footop">
                    <div className="overlay">
                        <div className="square">
                            <div className="logo"></div>
                            <div className="ad">VIPeak</div>
                        </div>
                        <div className="textoverlay">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.FooterTop}</p>})}</div>
                    </div>
                </div>
                <div className="footer">
            <div className="footerfirst">
                <div className="footerlogobox">
                    <div className="footerlogo"></div>
                </div>
                <div className="contactusbox">
                    <div className="contactus">
                        <h3>{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Contact}</p>})}</h3>
                        <h4 className="phonebox">+972 515554789
                            <div className="phonelogo"></div>
                        </h4>
                        <h4 className="emailbox">Support@Alpine.com
                        <div className="emaillogo"></div></h4>
                    </div>
                </div>
            </div>
            <div className="footersecond">
                <ul className="ss">
                    <h3 >{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Info}</p>})}</h3>
                    <li className="about">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.About}</p>})}</li>
                    <li className="blog">Blog</li>
                    <li className="testamonials">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Testamonials}</p>})}</li>
                    <li className="events">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Events}</p>})}</li>
                </ul>
            </div>
            <div className="footerthird">
                <ul className="ss">
                    <h3>{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Helpful}</p>})}</h3>
                    <li className="services">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Services}</p>})}</li>
                    <li className="support">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Support}</p>})}</li>
                    <li className="terms">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Terms}</p>})}</li>
                    <li className="privacy">{ChangeLanguageEvantHandler().map((language, index)=>{return <p>{language.Privacy}</p>})}</li>
                </ul>
            </div>
            <div className="footersub">
            <div className="footer-searchbox-wrapper">           
                      {/* <SearchField placeholder='Enter your Email...'/> */}
                </div>

            </div>
            <div className="footbottom">
                <div className="footersocial">
                  
                <a href="http://facebook.com"target="_blank" rel="noopener noreferrer">
                    <div className="facebook"></div>
                </a>

                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                    <div className="insta"></div>
                </a>
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                    <div className="twitter"></div>
                </a>
                <a href="https://en.wikipedia.org/wiki/Google%2B"target="_blank" rel="noopener noreferrer">
                    <div className="google"></div>
                </a>
                </div>
                <div className="arrowup" onClick={scrollTop}></div>
                <div className="footercredit">© Alpine.com | Created and Designed by Shafrir Kashi</div>
            </div>
                </div>
               
            </div>
        );
    }


export default Footer;