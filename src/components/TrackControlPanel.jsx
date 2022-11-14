import React from "react";
import PropTypes from "prop-types";

import { VolumeControl, ToggleButton, ActionButton } from "./";

/**
 * Handles volume and mute settings for its parent Track
 */
const TrackControlPanel = ({
    name,
    isTrackMuted,
    toggleTrackMute,
    trackVolume,
    setTrackVolume,
    toggleSetOfBeats,
    clearPattern,
}) => {
    return (
        <section className="trackControlPanel">
            <h2 className="trackName">{name}</h2>

            <ToggleButton
                property={isTrackMuted}
                toggleFunction={toggleTrackMute}
                onLabel="Unmute"
                offLabel="M"
            />

            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(0, 8);
                }}
                label="x2"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(0, 4);
                }}
                label="x4"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(0, 2);
                }}
                label="x8"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(0, 1);
                }}
                label="x16"
            />
            <VolumeControl
                className="trackVolumeControl"
                volume={trackVolume}
                setVolume={setTrackVolume}
            />

            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(1, 8);
                }}
                label="x2"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(1, 4);
                }}
                label="x4"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(1, 2);
                }}
                label="x8"
            />
            <ActionButton actionFunction={clearPattern} label="x0" />
        </section>
    );
};

TrackControlPanel.propTypes = {
    name: PropTypes.string.isRequired,
    isTrackMuted: PropTypes.bool.isRequired,
    toggleTrackMute: PropTypes.func.isRequired,
    trackVolume: PropTypes.number.isRequired,
    setTrackVolume: PropTypes.func.isRequired,
    toggleSetOfBeats: PropTypes.func.isRequired,
    clearPattern: PropTypes.func.isRequired,
};

export default TrackControlPanel;
