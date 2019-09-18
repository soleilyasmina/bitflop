import React, { useState } from 'react';
import Pool from './components/Pool';
import Swap from './components/Swap';
import './App.css';

function App() {
  const [pools, setPools] = useState([
    [true, true, false],
    [true, false, true],
    [true, true, true]
  ]);
  const [swap, setSwap] = useState(false);

  const setPool = (index, newPool) => {
    setPools(pools.map((pool, i) => i === index ? newPool : pool ));
  };

  return (
    <div className="brain">
      <h1 className="header">BITFLOP</h1>
      <div className="App">
        { pools.map((pool, index) => {
          return <Pool pool={pool} poolIndex={index} setPool={setPool}/>
        }) }
      </div>
      <Swap 
        click={() => setSwap(!swap)}
        swap={swap}/>
    </div>
  );
}

export default App;
