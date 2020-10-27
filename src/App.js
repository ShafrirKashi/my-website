import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar'
import Vipline from './Components/Vipline/Vipline'



function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="navbar"><Toolbar/>
      </div>
      <div className="vip__line"><Vipline/></div>
      </div>
      <div>shafrir</div>
    </div>
    
  );
}

export default App;
