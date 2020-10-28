import React, { Component } from 'react';
import './Wrap.css';

class Wrap extends Component {
    render() {
        return (
            <div className="wrap__text">
                <pre className="text_1">Winter</pre>
                <pre className="text_2"> Is</pre>
                <pre className="text_3">Coming</pre>
                <pre className="text_4">The ultimate cold-weather answer. <br/>
                Extra soft. Warm to the core.</pre>
            </div>
        );
    }
}

export default Wrap;