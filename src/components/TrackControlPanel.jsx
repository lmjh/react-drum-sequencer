import React from "react";
import { VolumeControl, ToggleButton } from "./";

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

export default TrackControlPanel;
