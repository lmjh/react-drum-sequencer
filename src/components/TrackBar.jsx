import React from "react";
import PropTypes from "prop-types";

import { TrackToggle } from "./";

const TrackBar = ({ trackPattern, togglePatternBeat }) => {
    return (
        <div>
            <div>TrackBar</div>
            {trackPattern.map((ele, index) => (
                <TrackToggle
                    key={index}
                    index={index}
                    active={ele}
                    toggleFunction={togglePatternBeat}
                />
            ))}
        </div>
    );
};

TrackBar.propTypes = {
    trackPattern: PropTypes.array.isRequired,
    togglePatternBeat: PropTypes.func.isRequired
};

export default TrackBar;
