import React from "react";
import PropTypes from "prop-types";

import { TrackToggle } from "./";

/**
 * Builds and displays array of TrackToggles from the current pattern for its 
 * parent track.
 */
const TrackBar = ({ trackPattern, togglePatternAtBeat }) => {
    return (
        <div className="trackBar">
            {trackPattern.map((ele, index) => (
                <TrackToggle
                    key={index}
                    index={index}
                    active={ele}
                    toggleFunction={togglePatternAtBeat}
                />
            ))}
        </div>
    );
};

TrackBar.propTypes = {
    trackPattern: PropTypes.array.isRequired,
    togglePatternAtBeat: PropTypes.func.isRequired,
};

export default TrackBar;
