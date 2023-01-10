import React, { useContext } from "react";

import { SettingsContext } from "../contexts";
import { TrackToggle } from "./";

import PropTypes from "prop-types";

/**
 * Builds and displays array of TrackToggles from the current pattern for its
 * parent track.
 */
const TrackBar = ({ beat, trackPattern, togglePatternAtBeat }) => {
    const { isMobile } = useContext(SettingsContext);
    // the current beat is not highlighted on the trackbar on mobile
    if (isMobile) {
        return (
            <div className="trackBar">
                {trackPattern.map((ele, index) => (
                    <TrackToggle
                        key={index}
                        index={index}
                        current={false}
                        active={ele}
                        toggleFunction={togglePatternAtBeat}
                    />
                ))}
            </div>
        );
    } else {
        return (
            <div className="trackBar">
                {trackPattern.map((ele, index) => (
                    <TrackToggle
                        key={index}
                        index={index}
                        current={beat === index}
                        active={ele}
                        toggleFunction={togglePatternAtBeat}
                    />
                ))}
            </div>
        );
    }
};

TrackBar.propTypes = {
    trackPattern: PropTypes.array.isRequired,
    togglePatternAtBeat: PropTypes.func.isRequired,
    beat: PropTypes.number.isRequired,
};

export default React.memo(TrackBar);
