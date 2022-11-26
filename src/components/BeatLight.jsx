import React, { useMemo } from "react";
import PropTypes from "prop-types";

/**
 * Provides visual indicator of current beat
 */
const BeatLight = ({ beatLightNum, current }) => {
    const beatClass = useMemo(
        () => (current ? "beatLightActive" : "beatLightInactive"),
        [current]
    );

    return (
        <span className="beatLight">
            {beatLightNum + 1}
            <span className={beatClass}></span>
        </span>
    );
};

BeatLight.propTypes = {
    beatLightNum: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
};

export default React.memo(BeatLight);
