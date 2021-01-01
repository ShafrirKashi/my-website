import React, { useContext } from 'react';
import './Footer.css'
import SearchField from 'react-search-field';
import {SelectContext} from '../Selector'





const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'}); };


    const Footer = (props) => {

        const value = useContext(SelectContext);

        return (
            <div className="foot">
                <div className="footop">
                    <div className="overlay">
                        <div className="square">
                            <div className="logo"></div>
                            <div className="ad">VIPeak</div>
                        </div>
                        <div className="textoverlay">Join And Get 10% Off</div>
                    </div>
                </div>
                <div className="footer">
            <div className="footerfirst">
                <div className="footerlogobox">
                    <div className="footerlogo"></div>
                </div>
                <div className="contactusbox">
                    <div className="contactus">
                        <h3>Contact US</h3>
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
                    <h3 >Information</h3>
                    <li className="about">About Us</li>
                    <li className="more">More Search</li>
                    <li className="blog">Blog</li>
                    <li className="testamonials">Testamonials</li>
                    <li className="events">Events</li>
                </ul>
            </div>
            <div className="footerthird">
                <ul className="ss">
                    <h3>Helpful Links</h3>
                    <li className="services">Services</li>
                    <li className="support">Support</li>
                    <li className="terms">Terms & Conditions</li>
                    <li className="privacy">Privacy Policy</li>
                </ul>
            </div>
            <div className="footersub">
            <div className="footer-searchbox-wrapper">           
                      <SearchField placeholder='Enter your Email...'/>
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