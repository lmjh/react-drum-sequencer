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
                className="controlPanelToggle playButton"
                innerClassName="controlPanelToggleInner"
            />
            <ActionButton
                actionFunction={stopPlaying}
                icon="fa-stop"
                label="Stop"
                className="controlPanelButton stopButton"
                innerClassName="controlPanelButtonInner"
            />
            <ToggleButton
                property={isGlobalMuted}
                toggleFunction={toggleGlobalMute}
                onIcon="fa-volume-high"
                offIcon="fa-volume-xmark"
                onLabel="Unmute"
                offLabel="Mute"
                className="controlPanelToggle muteButton"
                innerClassName="controlPanelToggleInner"
            />
            <VolumeControl
                className="globalVolumeControl"
                volume={globalVolume}
                setVolume={setGlobalVolume}
            />
            <TempoControl />
            <Visualiser />
            <div className="buttonLabelContainer playLabelContainer">
                <div className="controlLabel">{isPlaying && !isPaused ? "PAUSE" : "PLAY"}</div>
            </div>
            <div className="buttonLabelContainer stopLabelContainer">
                <div className="controlLabel">STOP</div>
            </div>
            <div className="buttonLabelContainer muteLabelContainer">
                <div className="controlLabel">{isGlobalMuted ? "UNMUTE" : "MUTE"}</div>
            </div>
            <div className="volumeLabelContainer">
                <div className="controlLabel">VOL</div>
            </div>
            <div className="tempoLabelContainer">
                <div className="controlLabel">TEMPO</div>
            </div>
        </section>
    );
};

export default React.memo(ControlPanel);
