import React from "react";
import PropTypes from "prop-types";

import { VolumeControl, ToggleButton } from "./";

/**
 * Handles volume and mute settings for its parent Track
 */
const TrackControlPanel = ({
    isTrackMuted,
    toggleTrackMute,
    trackVolume,
    setTrackVolume,
}) => {
    return (
        <div>
            <div>TrackControlPanel</div>
            <ToggleButton
                property={isTrackMuted}
                toggleFunction={toggleTrackMute}
                onLabel="Unmute"
                offLabel="Mute"
            />
            <VolumeControl volume={trackVolume} setVolume={setTrackVolume} />
        </div>
    );
};

TrackControlPanel.propTypes = {
    isTrackMuted: PropTypes.bool.isRequired,
    toggleTrackMute: PropTypes.func.isRequired,
    trackVolume: PropTypes.number.isRequired,
    setTrackVolume: PropTypes.func.isRequired,
};

export default TrackControlPanel;
