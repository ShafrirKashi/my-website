import React, { Component } from 'react';
import './Container1.css'
import SelectContext, {Selector} from '../../SelectContext'

class Container1 extends Component {
    render() {
      console.log(this.context);
      const {value} = this.context
        return (

            <div>
                <div className="container1image">
                  <div className="textdiv1">
                    <h1></h1>
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
Container1.contextType = SelectContext;

export default Container1;