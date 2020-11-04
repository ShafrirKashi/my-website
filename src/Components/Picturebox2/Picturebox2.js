import React, { Component } from 'react';
import './Picturebox2.css'

class Picturebox extends Component {
    render() {
        return (
        <div className="container3grid">
            <div className="box1_1">
                <div className="box1_1text">All-Weather Hiking Gear</div>
                <a href="22" class="buttonbox1_1">Shop Now</a>
            </div>
            <div className="box2_2">
                <div className="box2_2text">Ultimate Breathable Protection</div>
                <a href="33" class="buttonbox2_2">Shop Now</a>
            </div>
            <div className="box3_3">           
                <a href="44" class="buttonbox3_3">Shop For Women</a>
            </div>
            <div className="box4_4">
                <a href="55" class="buttonbox4_4">Shop For Men</a>
            </div>
        </div>   
        );
    }
}

export default Picturebox;