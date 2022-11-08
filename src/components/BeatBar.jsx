import React from "react";
import { BeatLight } from "./";

/**
 * Builds and displays the array of BeatLight components to track the current beat
 */
const BeatBar = () => {
    const beatArray = new Array(16)
        .fill("")
        .map((_ele, index) => <BeatLight key={index} beatLightNum={index} />);

    return (
        <div>
            <div>BeatBar</div>
            {beatArray}
        </div>
    );
};

export default BeatBar;
