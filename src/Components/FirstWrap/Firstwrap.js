import React, { Component } from 'react';
import './Firstwrap.css';

class FirstWrap extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="wrap__text1"></div>
                <a href="#" class="button">Shop Men</a>
                <a href="#" class="button">Shop Women</a>
            </div>
        );
    }
}

export default FirstWrap;