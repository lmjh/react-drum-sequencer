import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

/**
 * Displays whether a beat is selected in the playback pattern for the parent
 * Track and allows user to select / deselect the beat.
 */
const TrackToggle = ({ index, active, toggleFunction, current }) => {
    const toggleClass = useMemo(
        () => (index % 4 === 0 ? "trackToggleHighlight" : "trackToggle"),
        [index]
    );
    const toggleInnerClass = useMemo(
        () =>
            index % 4 === 0 ? "trackToggleInnerHighlight" : "trackToggleInner",
        [index]
    );

    const activeStyle = useMemo(
        () => (active ? { visibility: "visible" } : { visibility: "hidden" }),
        [active]
    );

    const currentStyle = useMemo(
        () => (current ? { visibility: "visible" } : { visibility: "hidden" }),
        [current]
    );

    return (
        <button
            onClick={useCallback(() => toggleFunction(index), [index])}
            className={toggleClass}
        >
            <div className={toggleInnerClass}>
                <div className="beatInactive">
                    <div className="beatActive" style={activeStyle}>
                        <div className="beatCurrent" style={currentStyle}></div>
                    </div>
                </div>
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
