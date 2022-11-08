import React from "react";
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

export default TrackBar;
