import React from "react";
import PropTypes from "prop-types";

/**
 * Provides visual indicator of current beat
 */
const BeatLight = ({ beatLightNum, beat }) => {

    return (
        <span className="beatLight">
            <span
                className={
                    beatLightNum === beat ? "beatLightActive" : "beatLightInactive"
                }
            ></span>
        </span>
    );
};

BeatLight.propTypes = {
    beatLightNum: PropTypes.number.isRequired,
    beat: PropTypes.number.isRequired,
};

export default BeatLight;
