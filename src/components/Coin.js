import React from 'react';
import headscoin from '../assets/heads.png';
import tailscoin from '../assets/tails.png';
import headsflip from '../assets/heads.gif';
import tailsflip from '../assets/tails.gif';
import masterheads from '../assets/masterheads.png';
import mastertails from '../assets/mastertails.png';
import masterheadsflip from '../assets/masterheads.gif';
import mastertailsflip from '../assets/mastertails.gif';

const Coin = (props) => {
  const [flip, setFlip] = React.useState(false);
  const { heads, flipCoin, master } = props;

  const controlFlip = () => {
    setFlip(true);
    setTimeout(() => {
      setFlip(false);
      flipCoin(); 
    }, 630);
  }

  return (
    <>
    { flip ?
    <img
      alt="coin"
      className="coin"
      onClick={() => controlFlip()}
      src={`${master ? heads ? masterheadsflip : mastertailsflip : heads ? headsflip : tailsflip}`}
    /> :
    <img
      alt="coin"
      className="coin"
      onClick={() => controlFlip()}
      src={`${master ? heads ? masterheads : mastertails : heads ? headscoin : tailscoin}`}
    /> 
    }
    </>
  )
};

export default Coin;
