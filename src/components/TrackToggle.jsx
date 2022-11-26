import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

/**
 * Displays whether a beat is selected in the playback pattern for the parent
 * Track and allows user to select / deselect the beat.
 */
const TrackToggle = ({ index, active, toggleFunction, current }) => {
    const toggleClass = useMemo(
        () => index % 4 === 0 ? "trackToggleRed" : "trackToggleDark",
        [index]
    );
    const toggleInnerClass = useMemo(
        () => index % 4 === 0 ? "trackToggleInnerRed" : "trackToggleInnerDark",
        [index]
    );

    const beatLightClass = useMemo(
        () => current ? "beatCurrent" : active ? "beatActive" : "beatInactive",
        [current, active]
    );

    return (
        <button
            onClick={useCallback(() => toggleFunction(index), [index])}
            className={toggleClass}
        >
            <div className={toggleInnerClass}>
                <div className={beatLightClass}></div>
            </div>
        </button>
    );
};

TrackToggle.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
    toggleFunction: PropTypes.func.isRequired,
};

export default React.memo(TrackToggle);
