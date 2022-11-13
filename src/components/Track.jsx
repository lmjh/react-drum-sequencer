import React, { useState, useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import useSound from "use-sound";

import { TrackControlPanel, TrackBar } from "./";
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

    // play the track sample on each selected beat
    useEffect(() => {
        if (trackPattern[beat] === 1 && beat !== prevBeat.current) {
            play();
        }
        prevBeat.current = beat;
    }, [beat, prevBeat]);

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

    // clears track pattern array
    const clearPattern = () => {
        setTrackPattern(new Array(16).fill(0));
    };

    const toggleSetOfBeats = (offset, interval) => {
        let anyChanged = false;
        setTrackPattern((prevTrackPattern) => {
            let newPattern = [...prevTrackPattern];
            for (let i = offset; i < newPattern.length; i += interval) {
                if (newPattern[i] === 0) {
                    newPattern[i] = 1;
                    anyChanged = true;
                }
            }
            if (!anyChanged) {
                for (let i = offset; i < newPattern.length; i += interval) {
                    newPattern[i] = 0;
                }
            }
            return newPattern;
        });
    };

    return (
        <>
            <TrackControlPanel
                name={name}
                isTrackMuted={isTrackMuted}
                toggleTrackMute={toggleTrackMute}
                trackVolume={trackVolume}
                setTrackVolume={setTrackVolume}
                toggleSetOfBeats={toggleSetOfBeats}
                clearPattern={clearPattern}
            />
            <TrackBar
                trackPattern={trackPattern}
                togglePatternAtBeat={togglePatternAtBeat}
            />
        </>
    );
};

Track.propTypes = {
    name: PropTypes.string.isRequired,
    sample: PropTypes.string.isRequired,
};

export default Track;
