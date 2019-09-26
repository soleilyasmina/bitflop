import React, { useEffect, useState } from 'react';
import Coin from './Coin.js';
import electric0 from '../assets/electric-3-0.gif';
import electric1 from '../assets/electric-3-1.gif';
import electric2 from '../assets/electric-3-2.gif';
import electricdefault from '../assets/electric.gif';

const Pool = (props) => {
  const [master, setMaster] = useState(false);
  const [current, setCurrent] = useState(null);
  const { pool, poolIndex, setPool, swap, trySwap, masterSwap } = props;

  const flipCoin = (index) => {
    if (swap) {
      trySwap(poolIndex, index); 
    }
    else {
      setPool(poolIndex, pool.map((coin, i) => i === index ? !coin : coin));
      setCurrent(index);
      setMaster(!master);
    }
  }

  useEffect(() => {
    if (masterSwap === poolIndex) {
      setMaster(!master);
    }
  }, [masterSwap])

  const electric = () => {
    switch(current) {
      case 0:
        return electric0;
      case 1:
        return electric1;
      case 2:
        return electric2;
      default:
        return electricdefault;
    }
  }

  return (
    <div className="pool">
      <div className="master-container">
        <Coin master={true} flipCoin={flipCoin} heads={master} />
      </div>
      <div className="electric">
        <img alt="electric" src={electric()}/>
      </div>
      <div className="pool-container">

        { pool.map((coin, i) => (
          <Coin
            heads={coin}
            flipCoin={flipCoin}
            index={i}
            poolIndex={props.poolIndex}
            master={false}
            swap={props.swap}
          />
        )) }
      </div>
    </div>
  )
}

export default Pool;
