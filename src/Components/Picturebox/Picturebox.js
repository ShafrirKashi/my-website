import React from 'react';
import './Picturebox.css'

const Picturebox = (props) => {


    
        return (
        <div className="container3grid">
            <div className="box1">
                    <div className="box1text">All-Weather Hiking Gear</div>
                <button href="22" className="buttonbox1">Shop Now</button>
            </div>
            <div className="box2">
                <div className="box2text">Ultimate Breathable Protection</div>
                <button href="33" className="buttonbox2">Shop Now</button>
            </div>
            <div className="box3">           
                <button href="44" className="buttonbox3">Shop Now for Women</button>
            </div>
            <div className="box4">
                <button href="55" className="buttonbox4">Shop Now for Men</button>
            </div>
        </div>   
        );
    }


     export default Picturebox;