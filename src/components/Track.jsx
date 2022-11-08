import React, { useState, useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import useSound from "use-sound";

import { TrackControlPanel, TrackBar } from "./";
import { SettingsContext, BeatContext } from "../contexts";

const Track = ({ name, sample }) => {
    const [isTrackMuted, setIsTrackMuted] = useState(false);
    const [trackVolume, setTrackVolume] = useState(0.6);
    const [trackPattern, setTrackPattern] = useState([
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    ]);

    const prevBeat = useRef(0);

    const { globalVolume, isGlobalMuted } = useContext(SettingsContext);
    const { beat } = useContext(BeatContext);

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

    const togglePatternBeat = (beatNum) => {
        setTrackPattern((prevTrackPattern) => {
            let newPattern = [...prevTrackPattern];
            newPattern[beatNum] = prevTrackPattern[beatNum] ? 0 : 1;
            return newPattern;
        });
    };

    useEffect(() => {
        if (trackPattern[beat] === 1 && beat !== prevBeat.current) {
            play();
        }
        prevBeat.current = beat;
    }, [beat, prevBeat]);

    return (
        <div>
            <h3>{name}</h3>
            <TrackControlPanel
                isTrackMuted={isTrackMuted}
                toggleTrackMute={toggleTrackMute}
                trackVolume={trackVolume}
                setTrackVolume={setTrackVolume}
            />
            <TrackBar
                trackPattern={trackPattern}
                togglePatternBeat={togglePatternBeat}
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
