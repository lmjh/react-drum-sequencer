import React from "react";
import PropTypes from "prop-types";

import { BeatLight } from "./";

/**
 * Builds and displays the array of BeatLight components to track the current beat
 */
const BeatBar = ({ beat }) => {
    const beatArray = new Array(16)
        .fill("")
        .map((_ele, index) => (
            <BeatLight
                key={index}
                beatLightNum={index}
                current={beat === index}
            />
        ));

    return <div className="beatBar">{beatArray}</div>;
};

BeatBar.propTypes = {
    beat: PropTypes.number.isRequired,
};

export default BeatBar;
