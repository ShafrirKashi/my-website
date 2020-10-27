import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar'
import Vipline from './Components/Vipline/Vipline'
import Firstwrap from './Components/FirstWrap/Firstwrap'


function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="navbar"><Toolbar/>
      </div>
      <div className="vip__line"><Vipline/></div>
      </div>
      <div><Firstwrap/></div>
    </div>
    
  );
}

export default App;
