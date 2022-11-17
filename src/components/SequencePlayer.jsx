import React, { useContext, useState, useEffect, useRef, useMemo } from "react";

import useSound from "use-sound";

import { Track } from "./";
import { SettingsContext } from "../contexts";
import samples from "../audio";

/**
 * Tracks and iterates the current beat, plays sounds on selected beats and 
 * manages track volume and pattern state. Uses a web worker to manage time 
 * between beats in a separate thread.
 */
const SequencePlayer = () => {
    // store current beat in state
    const [beat, setBeat] = useState(-1);

    // get global settings from context
    const { isPlaying, isPaused, tempo, globalVolume, isGlobalMuted } = useContext(SettingsContext);
    
    // set up constants and state for each track
    const trackNameZero = samples[0].name;
    const trackSampleZero = samples[0].sample;
    const [trackPatternZero, setTrackPatternZero] = useState(new Array(16).fill(0));
    const [trackVolumeZero, setTrackVolumeZero] = useState(0.6);
    const [trackPlayZero] = useSound(trackSampleZero, {
        volume: trackVolumeZero,
    });

    // construct webworker to keep time
    const timeKeeper = useMemo(
        () => new Worker("/workers/timeKeeper.js"),
        ["/workers/timeKeeper.js"]
    );

    // calculate beat length from tempo
    const beatLength = 15000 / tempo.current;

    const startTimeKeeper = () => {
        timeKeeper.postMessage({ msg: "start", interval: beatLength });
    };

    const stopTimeKeeper = () => {
        timeKeeper.postMessage({ msg: "stop" });
    };

    // temporary diagnostics
    const getTime = () => new Date().getTime();
    const lastLoop = useRef(getTime());

    useEffect(() => {
        if (!isPlaying && !isPaused) {
            setBeat(-1);
            stopTimeKeeper();
        }

        timeKeeper.onmessage = (event) => {
            if (event && event.data.msg === "beat") {
                // temporary diagnostics
                console.log("interval: ", beatLength);
                console.log(getTime() - lastLoop.current);
                lastLoop.current = getTime();
                setBeat((prev) => (prev + 1) % 16);
                if (isPlaying && !isPaused) startTimeKeeper();
            }
        };

        if (isPlaying && !isPaused) {
            startTimeKeeper();
        }
    }, [timeKeeper, beat, isPaused, isPlaying]);

    return (
        <div>Tracks</div>
    );
};

export default SequencePlayer;
