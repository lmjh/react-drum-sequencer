import React, { useMemo } from "react";
import PropTypes from "prop-types";

/**
 * Provides visual indicator of current beat
 */
const BeatLight = ({ beatLightNum, current }) => {
    const activeStyle = useMemo(
        () => (current ? { visibility: "visible" } : { visibility: "hidden" }),
        [current]
    );
    return (
        <span className="beatLight">
            {beatLightNum + 1}

            <div className="beatLightInactive">
                <div className="beatLightActive" style={activeStyle}></div>
            </div>
        </span>
    );
};

BeatLight.propTypes = {
    beatLightNum: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
};

export default React.memo(BeatLight);
