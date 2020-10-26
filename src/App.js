import React from 'react';
import './App.css';
import Toolbar from './Toolbar/Toolbar'
import Vipline from './Vipline/Vipline'

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="toolbar"><Toolbar/>
          <div className="logo">
            logo
          </div>
          <ul className="nav__items">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Equipment</li>
            <li>Accessories</li>
          </ul>
        
        
      </div>
      <div className="vipline"><Vipline/></div>
      </div>
    </div>
    
  );
}

export default App;
