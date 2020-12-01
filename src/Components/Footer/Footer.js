import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
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
                <div className="footerlogo"></div>
            </div>
            <div className="footersecond">
                <ul className="ss">
                    <h2 >Information</h2>
                    <li className="about">About Us</li>
                    <li className="more">More Search</li>
                    <li className="blog">Blog</li>
                    <li className="testamonials">Testamonials</li>
                    <li className="events">Events</li>
                </ul>
            </div>
            <div className="footerthird">
                <ul className="ss">
                    <h2>Helpful Links</h2>
                    <li className="services">Services</li>
                    <li className="support">Support</li>
                    <li className="terms">Terms & Conditions</li>
                    <li className="privacy">Privacy Policy</li>
                </ul>
            </div>
            <div className="footersub">ff</div>
            <div className="footbottom">
                <div className="footersocial">
                  
                <a href="http://facebook.com">
                    <div className="facebook"></div>
                </a>

                <a href="http://instagram.com">
                    <div className="insta"></div>
                </a>
                <a href="http://twitter.com">
                    <div className="twitter"></div>
                </a>
                <a href="https://en.wikipedia.org/wiki/Google%2B">
                    <div className="google"></div>
                </a>
                </div>
                <div className="footercredit">© Alpine.com | Created and Designed by Shafrir Kashi</div>
            </div>
                </div>
               
            </div>
        );
    }
}

export default Footer;