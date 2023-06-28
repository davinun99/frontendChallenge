import React from 'react';
import logo from './around-logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="breathing-animation" alt="logo" />
        <p>
          Check <code>README.md</code> file
        </p>
        
      </header>
    </div>
  );
}

export default App;
