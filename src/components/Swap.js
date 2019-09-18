import React from 'react';
import activeswap from '../assets/activeswap.gif';
import passiveswap from '../assets/passiveswap.gif';

const Swap = (props) => {
  return (
    <img
      alt="swap" 
      className="swap"
      onClick={props.click}
      src={ props.swap ? activeswap : passiveswap } />
  )
}

export default Swap;
