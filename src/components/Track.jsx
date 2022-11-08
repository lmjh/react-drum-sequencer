import React, { useState, useRef, useContext } from "react";

import { TrackControlPanel, TrackBar } from "./";
import { SettingsContext } from "../contexts";

const Track = () => {
    const [trackIsMuted, setTrackIsMuted] = useState(false);
    const [trackVolume, setTrackVolume] = useState(0.6);
    const [trackPattern, setTrackPattern] = useState([
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    ]);

    const { globalVolume, globalIsMuted } = useContext(SettingsContext);

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
            <button onClick={() => togglePatternBeat(0)}>toggle</button>
        </div>
    );
};

export default Track;
