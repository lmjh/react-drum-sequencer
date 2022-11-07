import React from 'react';

/**
 * Increases and decreases the volume of the passed volume property by 20%
 */
const VolumeControl = ({ volume, setVolume }) => {

  const increment = () => {
    volume < 0.8 ? setVolume(prevVol => Math.floor(prevVol * 10 + 2) / 10) : setVolume(1);
  }

  const decrement = () => {
    volume > 0.2 ? setVolume(prevVol => Math.floor(prevVol * 10 - 2) / 10) : setVolume(0);
  }

  return (
    <div>
      <div>VolumeControl</div>
      <div>
        <button onClick={decrement}>-</button>
        {volume}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default VolumeControl;