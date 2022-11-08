import React, { useContext } from "react";
import PropTypes from "prop-types";

import { BeatContext } from "../contexts";

const TrackToggle = ({ index, active, toggleFunction }) => {
    const beat = useContext(BeatContext);
    
    return (
        <button onClick={() => toggleFunction(index)}>
            {index === beat.beat ? "[0]" : active ? "[*]" : "[_]"}
        </button>
    );
};

TrackToggle.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    toggleFunction: PropTypes.func.isRequired
};

export default TrackToggle;
