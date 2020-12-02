import React, { Component } from 'react';
import './Container1.css'
import Json from '../Background/MOCK_DATA.json'

class Container1 extends Component {
    render() {
        return (

            <div>
                <div className="container1image">
                  <div className="textdiv1">
                    <h1 className="h1">Winter Is Coming</h1>
                    <h2 className="h2">Built for unforgiving conditions. 
                    <br/>Trusted by athletes across the globe.</h2>
                    <a href="22" className="button1">Shop Now</a>
                  </div>
                </div>
            </div>
        );
    }
}

export default Container1;