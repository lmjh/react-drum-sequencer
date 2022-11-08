import React, { useContext } from "react";

import { SettingsContext } from "../contexts";
import { ToggleButton, VolumeControl, Visualiser, TempoControl } from "./";

const ControlPanel = () => {
    const {
        isPlaying,
        togglePlayPause,
        isPaused,
        stopPlaying,
        isGlobalMuted,
        toggleGlobalMute,
        globalVolume,
        setGlobalVolume,
    } = useContext(SettingsContext);

    return (
        <div>
            <h2>ControlPanel</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <ToggleButton
                    property={isPlaying && !isPaused}
                    toggleFunction={togglePlayPause}
                    onLabel="Pause"
                    offLabel="Play"
                />
                <ToggleButton
                    property={isPlaying}
                    toggleFunction={stopPlaying}
                    onLabel="Stop"
                />
                <ToggleButton
                    property={isGlobalMuted}
                    toggleFunction={toggleGlobalMute}
                    onLabel="Unmute"
                    offLabel="Mute"
                />
                <VolumeControl
                    volume={globalVolume}
                    setVolume={setGlobalVolume}
                />
                <Visualiser />
                <TempoControl />
            </div>
        </div>
    );
};

export default ControlPanel;
