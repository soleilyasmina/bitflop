import React, { useState } from 'react';
import Coin from './Coin.js';

const Pool = (props) => {
  const [pool, setPool] = useState([true, true, false]);

  return (
    <>
      <Coin master={true} heads={false} />
      { pool.map((coin) => {
        return <Coin master={false} heads={coin} />
      }) }
    </>
  )
}

export default Pool;
