import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar'
import Vipline from './Components/Vipline/Vipline'
import Firstwrap from './Components/FirstWrap/Firstwrap'
import Wrap from './Components/Wrap/Wrap'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="navbar"><Toolbar/>
      </div>
      <div className="vip__line"><Vipline/></div>
      <div><Wrap/></div>
      </div>
      
      <div><Firstwrap/></div>
      <div><Footer/></div>
    </div>
    
  );
}

export default App;
