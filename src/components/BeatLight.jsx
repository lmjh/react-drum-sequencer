import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BeatContext } from "../contexts";

/**
 * Provides visual indicator of current beat
 */
const BeatLight = ({ beatLightNum }) => {
    const { beat } = useContext(BeatContext);

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
};

export default BeatLight;
