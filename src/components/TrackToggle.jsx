import React, { useContext } from "react";
import PropTypes from "prop-types";

import { BeatContext } from "../contexts";

/**
 * Displays whether a beat is selected in the playback pattern for the parent
 * Track and allows user to select / deselect the beat.
 */
const TrackToggle = ({ index, active, toggleFunction }) => {
    const beat = useContext(BeatContext);

    return (
        <button onClick={() => toggleFunction(index)} className="trackToggle">
            {index === beat.beat ? "[0]" : active ? "[*]" : "[_]"}
        </button>
    );
};

TrackToggle.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    toggleFunction: PropTypes.func.isRequired,
};

export default TrackToggle;
