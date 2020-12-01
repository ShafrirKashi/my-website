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
            <div className="footerfirst">dd</div>
            <div className="footersecond">
                <ul className="ss">
                    <h2 >Information</h2>
                    <li>About Us</li>
                    <li>More Search</li>
                    <li>Blog</li>
                    <li>Testamonials</li>
                    <li>Events</li>
                </ul>
            </div>
            <div className="footerthird">
                <ul className="ss">
                    <h2>Helpful Links</h2>
                    <li>Services</li>
                    <li>Support</li>
                    <li>Ters & Conditions</li>
                    <li>Privacy Policy</li>
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