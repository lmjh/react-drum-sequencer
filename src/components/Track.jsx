import React, { useState, useRef, useContext, useEffect } from "react";
import useSound from "use-sound";

import { TrackControlPanel, TrackBar } from "./";
import { SettingsContext, BeatContext } from "../contexts";
import { bongo } from "../audio/";

const Track = () => {
    const [isTrackMuted, setIsTrackMuted] = useState(false);
    const [trackVolume, setTrackVolume] = useState(0.6);
    const [trackPattern, setTrackPattern] = useState([
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    ]);
    const prevBeat = useRef(0);

    const { globalVolume, isGlobalMuted } = useContext(SettingsContext);
    const { beat } = useContext(BeatContext);

    const [play] = useSound(bongo, {
        volume:
            trackVolume *
            globalVolume *
            (isGlobalMuted ? 0 : 1) *
            (isTrackMuted ? 0 : 1),
    });

    useEffect(() => {
        if (trackPattern[beat] === 1 && beat !== prevBeat.current) {
            play();
        }
        prevBeat.current = beat;
    });

    const togglePatternBeat = (beatNum) => {
        setTrackPattern((prevTrackPattern) => {
            let newPattern = [...prevTrackPattern];
            newPattern[beatNum] = prevTrackPattern[beatNum] ? 0 : 1;
            console.log(prevTrackPattern[beatNum]);
            return newPattern;
        });
    };

    return (
        <div>
            <div>Track</div>
            <TrackControlPanel />
            <TrackBar
                trackPattern={trackPattern}
                togglePatternBeat={togglePatternBeat}
            />
            {trackPattern}
            <button onClick={play}>test audio</button>
        </div>
    );
};

export default Track;
