import React from "react";
import PropTypes from "prop-types";

/**
 * Displays whether a beat is selected in the playback pattern for the parent
 * Track and allows user to select / deselect the beat.
 */
const TrackToggle = ({ index, active, toggleFunction, beat }) => {
    const toggleClass = index % 4 === 0 ? "trackToggleRed": "trackToggleDark";
    const toggleInnerClass = index % 4 === 0 ? "trackToggleInnerRed" : "trackToggleInnerDark";

    const beatLightClass =
        index === beat ? "beatCurrent" : active ? "beatActive" : "beatInactive";

    return (
        <button onClick={() => toggleFunction(index)} className={toggleClass}>
            <div className={toggleInnerClass}>
                <div className={beatLightClass}></div>
            </div>
        </button>
    );
};

TrackToggle.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    beat: PropTypes.number.isRequired,
    toggleFunction: PropTypes.func.isRequired,
};

export default TrackToggle;
