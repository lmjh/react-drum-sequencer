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

    return (
        <div>
            <div>Track</div>
            <TrackControlPanel />
            <TrackBar />
        </div>
    );
};

export default Track;
