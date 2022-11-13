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
    clearPattern
}) => {
    return (
        <div>
            <div>{name}</div>
            <ToggleButton
                property={isTrackMuted}
                toggleFunction={toggleTrackMute}
                onLabel="Unmute"
                offLabel="Mute"
            />
            <VolumeControl volume={trackVolume} setVolume={setTrackVolume} />
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <ActionButton
                        actionFunction={() => {
                            toggleSetOfBeats(0, 8);
                        }}
                        label="X2"
                    />
                    <ActionButton
                        actionFunction={() => {
                            toggleSetOfBeats(0, 4);
                        }}
                        label="X4"
                    />
                    <ActionButton
                        actionFunction={() => {
                            toggleSetOfBeats(0, 2);
                        }}
                        label="X8"
                    />
                    <ActionButton
                        actionFunction={() => {
                            toggleSetOfBeats(0, 1);
                        }}
                        label="X16"
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <ActionButton
                        actionFunction={() => {
                            toggleSetOfBeats(1, 8);
                        }}
                        label="X2"
                    />
                    <ActionButton
                        actionFunction={() => {
                            toggleSetOfBeats(1, 4);
                        }}
                        label="X4"
                    />
                    <ActionButton
                        actionFunction={() => {
                            toggleSetOfBeats(1, 2);
                        }}
                        label="X8"
                    />
                    <ActionButton actionFunction={clearPattern} label="X0" />
                </div>
            </div>
        </div>
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
