import React from "react";
import PropTypes from "prop-types";

/**
 * Increases and decreases the volume of the passed volume property by 20%
 */
const VolumeControl = ({ volume, setVolume, className }) => {
    const increment = () => {
        volume < 0.8
            ? setVolume((prevVol) => Math.floor(prevVol * 10 + 2) / 10)
            : setVolume(1);
    };

    const decrement = () => {
        volume > 0.2
            ? setVolume((prevVol) => Math.floor(prevVol * 10 - 2) / 10)
            : setVolume(0);
    };

    return (
        <div className={className}>
            <button onClick={decrement}>-</button>
            {volume}
            <button onClick={increment}>+</button>
        </div>
    );
};

VolumeControl.propTypes = {
    volume: PropTypes.number.isRequired,
    setVolume: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

export default VolumeControl;
