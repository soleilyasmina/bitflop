import React, { useState } from 'react';
import Pool from './components/Pool';
import './App.css';

function App() {
  const [pools, setPools] = useState([
    [true, true, false],
    [true, false, true],
    [true, true, true]
  ]);

  const setPool = (index, newPool) => {
    setPools(pools.map((pool, i) => i === index ? newPool : pool ));
  };

  return (
    <div className="App">
      { pools.map((pool, index) => {
        return <Pool pool={pool} poolIndex={index} setPool={setPool}/>
      }) }
    </div>
  );
}

export default App;
