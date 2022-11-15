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
                onIcon="fa-pause"
                offIcon="fa-play"
                onLabel="Pause"
                offLabel="Play"
                className="controlPanelToggle" innerClassName="controlPanelToggleInner"
            />
            <ActionButton actionFunction={stopPlaying} label="Stop" className="actionButton" innerClassName="actionButtonInner"/>
            <ToggleButton
                property={isGlobalMuted}
                toggleFunction={toggleGlobalMute}
                onIcon="fa-volume-high"
                offIcon="fa-volume-xmark"
                onLabel="Unmute"
                offLabel="Mute"
                className="controlPanelToggle" innerClassName="controlPanelToggleInner"
            />
            <VolumeControl
                className="globalVolumeControl"
                volume={globalVolume}
                setVolume={setGlobalVolume}
            />
            <TempoControl />
            <Visualiser />
        </section>
    );
};

export default ControlPanel;
