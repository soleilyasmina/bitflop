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
  const [swapCoins, setSwapCoins] = useState([]);
  const [masterSwap, setMasterSwap] = useState(null);

  const setPool = (index, newPool, secondIndex = null, secondPool = null) => {
    if (!swap) {
      setPools(pools.map((pool, i) => i === index ? newPool : pool ));
    } else {
      setPools(pools.map((pool, i) => {
        if (i === index) {
          return newPool;
        } else if (i === secondIndex) {
          return secondPool;
        } else {
          return pool;
        }
      }))
    }
  };

  const swapPool = (first, second) => {
    const firstPool = pools[first[0]];
    const secondPool = pools[second[0]];

    firstPool[first[1]] = !firstPool[first[1]];
    secondPool[second[1]] = !secondPool[second[1]];

    setPool(first[0], firstPool, second[0], secondPool);
    setSwap(false);
  }

  const determineReceivingTails = (first, second) => {
    return pools[first[0]][first[1]] ? second[0] : first[0];
  }

  const validateSwap = (first, second) => {
    return pools[first[0]][first[1]] !== pools[second[0]][second[1]] && first[0] !== second[0];
  }

  const trySwap = (poolIndex, coinIndex) => {
    if (swapCoins.length === 0) {
      setSwapCoins([[poolIndex, coinIndex]]);
    } else if (swapCoins.length === 1) {
      const first = swapCoins[0];
      const second = [poolIndex, coinIndex];
      if (validateSwap(first, second)) {
        swapPool(first, second);
        const receivingTails = determineReceivingTails(first, second);
        setMasterSwap(receivingTails);
      }
      setSwapCoins([]);
    }
  }

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
          return <Pool pool={pool} poolIndex={index} setPool={setPool} swap={swap} trySwap={trySwap} masterSwap={masterSwap}/>
        }) }
      </div>
      <Swap
        click={() => setSwap(!swap)}
        swap={swap}/>
      </div>
  );
}

export default App;
