import React, { useState } from 'react';
import Coin from './Coin.js';

const Pool = (props) => {
  const [master, setMaster] = useState(true);
  const [pool, setPool] = useState([true, true, false]);

  const flipCoin = (index) => {
    setPool(pool.map((coin, i) => i === index ? !coin : coin));
  }

  return (
    <div className="pool">
      <div className="master-container">
      <Coin master={true} flipCoin={() => setMaster(!true)} heads={master} />
      </div>
      <div className="pool-container">
        { pool.map((coin, i) => (
          <Coin
            heads={coin}
            flipCoin={() => flipCoin(i)}
            master={false}
          />
        )) }
      </div>
    </div>
  )
}

export default Pool;
