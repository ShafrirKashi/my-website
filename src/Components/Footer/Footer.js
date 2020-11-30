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
            <div className="footersecond">ee</div>
            <div className="footerthird">cc</div>
            <div className="footersub">ff</div>
            <div className="footbottom">© Alpine.com | Created and Designed by Shafrir Kashi</div>
                </div>
               
            </div>
        );
    }
}

export default Footer;