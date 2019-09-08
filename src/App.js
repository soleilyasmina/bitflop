import React from 'react';
import Coin from './components/Coin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Coin master={true}/>
      <Coin master={false}/>
    </div>
  );
}

export default App;
