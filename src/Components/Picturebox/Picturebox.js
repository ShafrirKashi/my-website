import React, { Component } from 'react';
import './Picturebox.css'

class Picturebox extends Component {
    render() {
        return (
        <div className="container3grid">
            <div className="box1">
                <div className="box1text">All-Weather Hiking Gear</div>
                <a href="22" class="buttonbox1">Shop Now</a>
            </div>
            <div className="box2">
                <div className="box2text">Ultimate Breathable Protection</div>
                <a href="33" class="buttonbox2">Shop Now</a>
            </div>
            <div className="box3">
                <div className="box3text"></div>
                <a href="44" class="buttonbox3">Shop For Women</a>
            </div>
            <div className="box4">
                <div className="box4text"></div>
                <a href="55" class="buttonbox4">Shop For Men</a>
            </div>
        </div>   
        );
    }
}

export default Picturebox;