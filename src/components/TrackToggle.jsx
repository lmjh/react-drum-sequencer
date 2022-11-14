import React, { useContext } from "react";
import PropTypes from "prop-types";

import { BeatContext } from "../contexts";

/**
 * Displays whether a beat is selected in the playback pattern for the parent
 * Track and allows user to select / deselect the beat.
 */
const TrackToggle = ({ index, active, toggleFunction }) => {
    // const buttonType(index) => {
    //     if (index < 4 || (index > 7 && index < 12)) {
    //         return "dark";
    //     } else 
    // } 
    // const toggleClass = index < 4 || (index > 7 && index < 12) ? "trackToggleDark" : "trackToggleRed";
    const toggleClass = index % 4 === 0 ? "trackToggleRed": "trackToggleDark";
    // const toggleInnerClass = index < 4 || (index > 7 && index < 12) ? "trackToggleInnerDark" : "trackToggleInnerRed";
    const toggleInnerClass = index % 4 === 0 ? "trackToggleInnerRed" : "trackToggleInnerDark";
    const beat = useContext(BeatContext);

    // const activeLightClass = active ? "beatActive" : "beatInactive";
    const beatLightClass =
        index === beat.beat ? "beatCurrent" : active ? "beatActive" : "beatInactive";
    return (
        <button onClick={() => toggleFunction(index)} className={toggleClass}>
            <div className={toggleInnerClass}>
                <div className={beatLightClass}></div>
            </div>
            {/* <div className={activeLightClass}></div> */}
        </button>
    );
};

TrackToggle.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    toggleFunction: PropTypes.func.isRequired,
};

export default TrackToggle;
