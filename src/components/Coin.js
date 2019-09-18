import React, { useEffect } from 'react';
import headscoin from '../assets/heads.png';
import tailscoin from '../assets/tails.png';
import headsflip from '../assets/newtailsonce.gif';
import tailsflip from '../assets/newheadsonce.gif';
import masterheads from '../assets/masterheads.png';
import mastertails from '../assets/mastertails.png';
import masterheadsflip from '../assets/masterheadsonce.gif';
import mastertailsflip from '../assets/mastertailsonce.gif';

const Coin = (props) => {
  const [flip, setFlip] = React.useState(false);
  const { heads, flipCoin, index, master } = props;
  const [display, setDisplay] = React.useState(heads);

  const controlFlip = (newHeads) => {
    setFlip(true);
    setTimeout(() => {
      setFlip(false);
      setDisplay(newHeads);
    }, 1000);
  }

  useEffect(() => {
    controlFlip(heads); 
  }, [heads]);

  return (
    <>
    { flip ?
    <img
      alt="coin"
      className="coin"
      onClick={() => master && ( heads === display ) ? null : flipCoin(index)}
      src={`${master ? display ? masterheadsflip : mastertailsflip : display ? headsflip : tailsflip}`}
    /> :
    <img
      alt="coin"
      className="coin"
      onClick={() => master && ( heads === display ) ? null : flipCoin(index)}
      src={`${master ? display ? masterheads : mastertails : display ? headscoin : tailscoin}`}
    /> 
    }
    </>
  )
};

export default Coin;
