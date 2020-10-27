import React from 'react';
import './App.css';
import Toolbar from './Toolbar/Toolbar'
import Vipline from './Vipline/Vipline'



function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="navbar"><Toolbar/>
      </div>
      <div className="vip__line"><Vipline/></div>
      </div>
    </div>
    
  );
}

export default App;
