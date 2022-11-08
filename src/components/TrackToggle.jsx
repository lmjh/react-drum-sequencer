import React from "react";
import PropTypes from "prop-types";

const TrackToggle = ({ index, active, toggleFunction }) => {
    return (
        <button onClick={() => toggleFunction(index)}>
            {active ? "[*]" : "[_]"}
        </button>
    );
};

TrackToggle.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    toggleFunction: PropTypes.func.isRequired
};

export default TrackToggle;
