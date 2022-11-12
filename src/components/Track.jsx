import React, { useState, useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import useSound from "use-sound";

import { ActionButton, TrackControlPanel, TrackBar } from "./";
import { SettingsContext, BeatContext } from "../contexts";

/**
 * Handles playback, volume and pattern functionality for each track
 */
const Track = ({ name, sample }) => {
    const [isTrackMuted, setIsTrackMuted] = useState(false);
    const [trackVolume, setTrackVolume] = useState(0.6);
    const [trackPattern, setTrackPattern] = useState(new Array(16).fill(0));

    const prevBeat = useRef(0);

    const { globalVolume, isGlobalMuted } = useContext(SettingsContext);
    const { beat } = useContext(BeatContext);

    // calculate sample playback volume from track and global settings
    const volume =
        trackVolume *
        globalVolume *
        (isGlobalMuted ? 0 : 1) *
        (isTrackMuted ? 0 : 1);

    const [play] = useSound(sample, {
        volume: volume,
    });

    const toggleTrackMute = () => {
        isTrackMuted ? setIsTrackMuted(false) : setIsTrackMuted(true);
    };

    // toggles the track pattern array between 1 and 0 at the submitted index
    const togglePatternAtBeat = (beatNum) => {
        setTrackPattern((prevTrackPattern) => {
            let newPattern = [...prevTrackPattern];
            newPattern[beatNum] = prevTrackPattern[beatNum] ? 0 : 1;
            return newPattern;
        });
    };

    // toggles the track pattern array between 1 and 0 at the submitted index
    const clearPattern = () => {
        setTrackPattern((prevTrackPattern) => prevTrackPattern.fill(0));
    };

    // play the track sample on each selected beat
    useEffect(() => {
        if (trackPattern[beat] === 1 && beat !== prevBeat.current) {
            play();
        }
        prevBeat.current = beat;
    }, [beat, prevBeat]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h3>{name}</h3>
            <TrackControlPanel
                isTrackMuted={isTrackMuted}
                toggleTrackMute={toggleTrackMute}
                trackVolume={trackVolume}
                setTrackVolume={setTrackVolume}
            />
            <ActionButton actionFunction={clearPattern} label="Clear" />
            <TrackBar
                trackPattern={trackPattern}
                togglePatternAtBeat={togglePatternAtBeat}
            />
            <button onClick={play}>test audio</button>
        </div>
    );
};

Track.propTypes = {
    name: PropTypes.string.isRequired,
    sample: PropTypes.string.isRequired,
};

export default Track;
