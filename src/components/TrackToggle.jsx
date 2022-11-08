import React from "react";

const TrackToggle = ({ index, active, toggleFunction }) => {
    return (
        <button onClick={() => toggleFunction(index)}>
            {active ? "[*]" : "[_]"}
        </button>
    );
};

export default TrackToggle;
