import React from "react";
import PropTypes from "prop-types";

import { VolumeControl, ActionButton } from "./";

/**
 * Handles volume and mute settings for its parent Track
 */
const TrackControlPanel = ({
    name,
    trackVolume,
    setTrackVolume,
    toggleSetOfBeats,
    clearPattern,
}) => {
    return (
        <section className="trackControlPanel">
            <h2 className="trackName">{name}</h2>

            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(0, 8);
                }}
                label="2"
                className="patternShortcut patternShortcutLeft"
                innerClassName="patternShortcutInner patternShortcutLeft"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(0, 4);
                }}
                label="4"
                className="patternShortcut"
                innerClassName="patternShortcutInner"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(0, 2);
                }}
                label="8"
                className="patternShortcut"
                innerClassName="patternShortcutInner"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(0, 1);
                }}
                label="16"
                className="patternShortcut patternShortcutRight"
                innerClassName="patternShortcutInner patternShortcutRight"
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
                label="2"
                className="patternShortcut patternShortcutLeft"
                innerClassName="patternShortcutInner patternShortcutLeft"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(1, 4);
                }}
                label="4"
                className="patternShortcut"
                innerClassName="patternShortcutInner"
            />
            <ActionButton
                actionFunction={() => {
                    toggleSetOfBeats(1, 2);
                }}
                label="8"
                className="patternShortcut"
                innerClassName="patternShortcutInner"
            />
            <ActionButton
                actionFunction={clearPattern}
                label="0"
                className="patternShortcut patternShortcutRight"
                innerClassName="patternShortcutInner patternShortcutRight"
                icon="fa-ban"
            />
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
