import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { VolumeControl, ActionButton } from "./";

/**
 * Handles volume and pattern shortcuts for its parent Track
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
            <div className="trackName">
                <h2 className="trackNameInner">{name}</h2>
            </div>

            <ActionButton
                actionFunction={useCallback(() => {
                    toggleSetOfBeats(0, 8);
                }, [toggleSetOfBeats])}
                label="2"
                className="patternShortcut patternShortcutTopLeft"
                innerClassName="patternShortcutInner patternShortcutTopLeft"
            />
            <ActionButton
                actionFunction={useCallback(() => {
                    toggleSetOfBeats(0, 4);
                }, [toggleSetOfBeats])}
                label="4"
                className="patternShortcut"
                innerClassName="patternShortcutInner"
            />
            <ActionButton
                actionFunction={useCallback(() => {
                    toggleSetOfBeats(0, 2);
                }, [toggleSetOfBeats])}
                label="8"
                className="patternShortcut"
                innerClassName="patternShortcutInner"
            />
            <ActionButton
                actionFunction={useCallback(() => {
                    toggleSetOfBeats(0, 1);
                }, [toggleSetOfBeats])}
                label="16"
                className="patternShortcut patternShortcutTopRight"
                innerClassName="patternShortcutInner patternShortcutTopRight"
            />
            <VolumeControl
                className="trackVolumeControl"
                volume={trackVolume}
                setVolume={setTrackVolume}
            />

            <ActionButton
                actionFunction={useCallback(() => {
                    toggleSetOfBeats(1, 8);
                }, [toggleSetOfBeats])}
                label="2"
                className="patternShortcut patternShortcutBottomLeft"
                innerClassName="patternShortcutInner patternShortcutBottomLeft"
            />
            <ActionButton
                actionFunction={useCallback(() => {
                    toggleSetOfBeats(1, 4);
                }, [toggleSetOfBeats])}
                label="4"
                className="patternShortcut"
                innerClassName="patternShortcutInner"
            />
            <ActionButton
                actionFunction={useCallback(() => {
                    toggleSetOfBeats(1, 2);
                }, [toggleSetOfBeats])}
                label="8"
                className="patternShortcut"
                innerClassName="patternShortcutInner"
            />
            <ActionButton
                actionFunction={clearPattern}
                label="0"
                className="patternShortcut patternShortcutBottomRight"
                innerClassName="patternShortcutInner patternShortcutBottomRight"
                icon="fa-ban"
            />
        </section>
    );
};

TrackControlPanel.propTypes = {
    name: PropTypes.string.isRequired,
    trackVolume: PropTypes.number.isRequired,
    setTrackVolume: PropTypes.func.isRequired,
    toggleSetOfBeats: PropTypes.func.isRequired,
    clearPattern: PropTypes.func.isRequired,
};

export default React.memo(TrackControlPanel);
