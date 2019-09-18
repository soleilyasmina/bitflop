import React, { useState } from 'react';
import Pool from './components/Pool';
import Swap from './components/Swap';
import './App.css';

function App() {
  const [pools, setPools] = useState([
    [true, true, false],
    [true, false, true],
    [true, true, false]
  ]);
  const [swap, setSwap] = useState(false);

  const setPool = (index, newPool, second = null, secondNewPool = null) => {
    if (!second) {
      setPools(pools.map((pool, i) => i === index ? newPool : pool ));
    }
    else {
      setPools(pools.map((pool, i) => {
        if (i === index) {
          return newPool;
        } else if (i === second) {
          return secondNewPool;
        } else {
          return pool;
        }
      }));
    }
  };

  // receivingTails and receivingHeads are pools
  // we need two pool indexes
  // and which pool is receiving tails
  // we flip the master and coin on the one receiving tails
  // and we flip the coin on the one receiving tails

  return (
    <div className="brain">
      <h1 className="header">BITFLOP</h1>
      <div className="App">
        { pools.map((pool, index) => {
          return <Pool pool={pool} poolIndex={index} setPool={setPool} swap={swap}/>
        }) }
      </div>
      <Swap 
        click={() => setSwap(!swap)}
        swap={swap}/>
    </div>
  );
}

export default App;
