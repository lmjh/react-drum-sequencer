import React, { useContext } from "react";

import { SettingsContext } from "../contexts";
import {
    ActionButton,
    TempoControl,
    ToggleButton,
    Visualiser,
    VolumeControl,
} from "./";

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
        <section className="controlPanel">
            <ToggleButton
                property={isPlaying && !isPaused}
                toggleFunction={togglePlayPause}
                onLabel="Pause"
                offLabel="Play"
            />
            <ActionButton actionFunction={stopPlaying} label="Stop" className="actionButton" innerClassName="actionButtonInner"/>
            <ToggleButton
                property={isGlobalMuted}
                toggleFunction={toggleGlobalMute}
                onLabel="Unmute"
                offLabel="Mute"
            />
            <VolumeControl
                className="globalVolumeControl"
                volume={globalVolume}
                setVolume={setGlobalVolume}
            />
            <Visualiser />
            <TempoControl />
        </section>
    );
};

export default ControlPanel;
