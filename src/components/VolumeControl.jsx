import React, { useCallback } from "react";
import PropTypes from "prop-types";
import ActionButton from "./ActionButton";

/**
 * Increases and decreases the volume of the passed volume property by 20%
 */
const VolumeControl = ({ volume, setVolume, className }) => {
    const increment = useCallback(() => {
        volume < 0.8
            ? setVolume((prevVol) => Math.floor(prevVol * 10 + 2) / 10)
            : setVolume(1);
    }, [volume]);

    const decrement = useCallback(() => {
        volume > 0.2
            ? setVolume((prevVol) => Math.floor(prevVol * 10 - 2) / 10)
            : setVolume(0);
    }, [volume]);

    return (
        <div className={className}>
            <ActionButton
                label="-"
                actionFunction={decrement}
                className="volumeButton"
                innerClassName={volume > 0 ? "volumeButtonInner" : "volumeButtonInnerInactive"}
            />
            <div className="volumeDisplay">
                <div
                    className={"volumeDisplayBar volumeTwenty ".concat(
                        volume > 0 ? "volumeActive" : "volumeInactive"
                    )}
                ></div>
                <div
                    className={"volumeDisplayBar volumeForty ".concat(
                        volume > 0.2 ? "volumeActive" : "volumeInactive"
                    )}
                ></div>
                <div
                    className={"volumeDisplayBar volumeSixty ".concat(
                        volume > 0.4 ? "volumeActive" : "volumeInactive"
                    )}
                ></div>
                <div
                    className={"volumeDisplayBar volumeEighty ".concat(
                        volume > 0.6 ? "volumeActive" : "volumeInactive"
                    )}
                ></div>
                <div
                    className={"volumeDisplayBar volumeHundred ".concat(
                        volume > 0.8 ? "volumeActive" : "volumeInactive"
                    )}
                ></div>
            </div>
            {/* {volume} */}
            <ActionButton
                label="+"
                actionFunction={increment}
                className="volumeButton"
                innerClassName={volume < 1 ? "volumeButtonInner" : "volumeButtonInnerInactive"}
            />
        </div>
    );
};

VolumeControl.propTypes = {
    volume: PropTypes.number.isRequired,
    setVolume: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

export default React.memo(VolumeControl);
