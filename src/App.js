import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar'
import Vipline from './Components/Vipline/Vipline'
import Firstwrap from './Components/FirstWrap/Firstwrap'
import Wrap from './Components/Wrap/Wrap'
import Footer from './Components/Footer/Footer'
import Secondwrap from './Components/Secondwrap/Secondwrap'

function App() {
  return (
    <div className="App">      
      <div className="container">
      <div className="vip__line"><Vipline/></div>
      <div className="navbar"><Toolbar/>
      </div>     
      <div><Wrap/></div>
      </div>     
      <div><Firstwrap/></div>
      <div><Secondwrap/></div>
      <div><Footer/></div>
    </div>
    
  );
}

export default App;
