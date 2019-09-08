import React from 'react';
import headscoin from '../assets/heads.png';
import tailscoin from '../assets/tails.png';
import headsflip from '../assets/heads.gif';
import tailsflip from '../assets/tails.gif';
import master from '../assets/masterheads.png';
import masterflip from '../assets/master.gif';

const Coin = (props) => {
  const [flip, setFlip] = React.useState(false);
  const [heads, setHeads] = React.useState(false);

  const controlFlip = () => {
    setFlip(true);
    setTimeout(() => {
      setFlip(false);
      setHeads(!heads);
    }, 630);
  }

  return (
    <>
    { flip ?
    <img
      alt="coin"
      className="coin"
      onClick={() => controlFlip()}
      src={`${props.master ? masterflip : heads ? headsflip : tailsflip}`}
    /> :
    <img
      alt="coin"
      className="coin"
      onClick={() => controlFlip()}
      src={`${props.master ? master : heads ? headscoin : tailscoin}`}
    /> 
    }
    </>
  )
};

export default Coin;
