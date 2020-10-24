import React from 'react';
import './App.css';
import Toolbar from './Toolbar/Toolbar'
import Vipline from './Vipline/Vipline'

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <div className="toolbar"><Toolbar/></div>
      <div className="vipline"><Vipline/></div>
    </div>
    
  );
}

export default App;
