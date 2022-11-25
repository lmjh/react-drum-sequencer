import React, { useContext, useState, useEffect, useRef, useMemo } from "react";

import useSound from "use-sound";

import { Track, BeatBar } from "./";
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
    const { isPlaying, isPaused, tempo, globalVolume, isGlobalMuted } =
        useContext(SettingsContext);

    // set up constants and state for each track
    const trackNameZero = samples[0].name;
    const trackSampleZero = samples[0].sample;
    const [trackPatternZero, setTrackPatternZero] = useState(
        new Array(16).fill(0)
    );
    const [trackVolumeZero, setTrackVolumeZero] = useState(0.6);
    const [trackPlayZero] = useSound(trackSampleZero, {
        volume: trackVolumeZero * globalVolume * (isGlobalMuted ? 0 : 1),
    });

    const trackNameOne = samples[1].name;
    const trackSampleOne = samples[1].sample;
    const [trackPatternOne, setTrackPatternOne] = useState(
        new Array(16).fill(0)
    );
    const [trackVolumeOne, setTrackVolumeOne] = useState(0.6);
    const [trackPlayOne] = useSound(trackSampleOne, {
        volume: trackVolumeOne * globalVolume * (isGlobalMuted ? 0 : 1),
    });

    const trackNameTwo = samples[2].name;
    const trackSampleTwo = samples[2].sample;
    const [trackPatternTwo, setTrackPatternTwo] = useState(
        new Array(16).fill(0)
    );
    const [trackVolumeTwo, setTrackVolumeTwo] = useState(0.6);
    const [trackPlayTwo] = useSound(trackSampleTwo, {
        volume: trackVolumeTwo * globalVolume * (isGlobalMuted ? 0 : 1),
    });

    const trackNameThree = samples[3].name;
    const trackSampleThree = samples[3].sample;
    const [trackPatternThree, setTrackPatternThree] = useState(
        new Array(16).fill(0)
    );
    const [trackVolumeThree, setTrackVolumeThree] = useState(0.6);
    const [trackPlayThree] = useSound(trackSampleThree, {
        volume: trackVolumeThree * globalVolume * (isGlobalMuted ? 0 : 1),
    });

    // construct webworker to keep time
    const timeKeeper = useMemo(
        () => new Worker("./workers/timeKeeper.js"),
        ["./workers/timeKeeper.js"]
    );

    // calculate beat length from tempo
    const beatLength = Math.floor(15000 / tempo.current);

    const startTimeKeeper = () => {
        timeKeeper.postMessage({ msg: "start", interval: beatLength });
    };

    const stopTimeKeeper = () => {
        timeKeeper.postMessage({ msg: "stop" });
    };

    const getTime = () => new Date().getTime();
    const lastLoop = useRef(null);

    // development mode metrics
    if (process.env.NODE_ENV === "development") {
        lastLoop.current = getTime();
    }

    useEffect(() => {
        if (!isPlaying && !isPaused) {
            setBeat(-1);
            stopTimeKeeper();
        }

        timeKeeper.onmessage = (event) => {
            if (event && event.data.msg === "beat") {
                setBeat((prev) => (prev + 1) % 16);
                if (trackPatternZero[beat]) trackPlayZero();
                if (trackPatternOne[beat]) trackPlayOne();
                if (trackPatternTwo[beat]) trackPlayTwo();
                if (trackPatternThree[beat]) trackPlayThree();
                if (isPlaying && !isPaused) startTimeKeeper();

                // development mode metrics
                if (process.env.NODE_ENV === "development") {
                    console.log("Interval: ", beatLength);
                    console.log(
                        "Beat delay: ",
                        beatLength - (getTime() - lastLoop.current)
                    );
                    lastLoop.current = getTime();
                }
            }
        };

        if (isPlaying && !isPaused) {
            startTimeKeeper();
        }
    }, [timeKeeper, beat, isPaused, isPlaying]);

    return (
        <>
            <BeatBar beat={beat} />
            <Track
                beat={beat}
                trackName={trackNameZero}
                trackPattern={trackPatternZero}
                setTrackPattern={setTrackPatternZero}
                trackVolume={trackVolumeZero}
                setTrackVolume={setTrackVolumeZero}
                divider={true}
            />
            <Track
                beat={beat}
                trackName={trackNameOne}
                trackPattern={trackPatternOne}
                setTrackPattern={setTrackPatternOne}
                trackVolume={trackVolumeOne}
                setTrackVolume={setTrackVolumeOne}
                divider={true}
            />
            <Track
                beat={beat}
                trackName={trackNameTwo}
                trackPattern={trackPatternTwo}
                setTrackPattern={setTrackPatternTwo}
                trackVolume={trackVolumeTwo}
                setTrackVolume={setTrackVolumeTwo}
                divider={true}
            />
            <Track
                beat={beat}
                trackName={trackNameThree}
                trackPattern={trackPatternThree}
                setTrackPattern={setTrackPatternThree}
                trackVolume={trackVolumeThree}
                setTrackVolume={setTrackVolumeThree}
                divider={false}
            />
        </>
    );
};

export default SequencePlayer;
