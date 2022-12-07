import React, { useContext, useState, useEffect, useRef } from "react";

import { Track, BeatBar } from "./";
import { SettingsContext } from "../contexts";
import samples from "../audio";

const AudioContext = window.AudioContext || window.webkitAudioContext;

/**
 * Tracks and iterates the current beat, plays sounds on selected beats and
 * manages track volume and patterns.
 */
const SequencePlayer = () => {
    // variables

    // store current beat in state
    const [beat, setBeat] = useState(-1);

    // get global settings from context
    const { isPlaying, isPaused, tempo, globalVolume, isGlobalMuted } =
        useContext(SettingsContext);

    // store contexts, nodes and scheduler variables in refs
    const audioContext = useRef();
    const mainGain = useRef();
    const scheduleTimer = useRef();
    const nextBeatTime = useRef();

    // set up constants and state for each track
    const trackNameZero = samples[0].name;
    const trackSampleZero = samples[0].sample;
    const trackPatternZero = useRef(new Array(16).fill(0));
    const [trackVolumeZero, setTrackVolumeZero] = useState(0.6);
    const trackBufferZero = useRef();

    const trackNameOne = samples[1].name;
    const trackSampleOne = samples[1].sample;
    const trackPatternOne = useRef(new Array(16).fill(0));
    const [trackVolumeOne, setTrackVolumeOne] = useState(0.6);
    const trackBufferOne = useRef();

    const trackNameTwo = samples[2].name;
    const trackSampleTwo = samples[2].sample;
    const trackPatternTwo = useRef(new Array(16).fill(0));
    const [trackVolumeTwo, setTrackVolumeTwo] = useState(0.6);
    const trackBufferTwo = useRef();

    const trackNameThree = samples[3].name;
    const trackSampleThree = samples[3].sample;
    const trackPatternThree = useRef(new Array(16).fill(0));
    const [trackVolumeThree, setTrackVolumeThree] = useState(0.6);
    const trackBufferThree = useRef();

    // functions

    // loads drum samples into an AudioBuffer
    const loadSample = (sampleURL, buffer) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", sampleURL, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = () => {
            audioContext.current.decodeAudioData(xhr.response, (decoded) => {
                buffer.current = decoded;
            });
        };
        xhr.send();
    };

    // plays the given sample buffer at the given time
    const playSample = (time, buffer) => {
        let source = audioContext.current.createBufferSource();
        source.connect(mainGain.current);
        source.buffer = buffer;
        source.start(time);
    };

    // starts the scheduler
    const startScheduler = () => {
        // resume the audio context if it is suspended
        if (audioContext.current.state === "suspended") {
            audioContext.current.resume();
        }
        // set nextBeatTime to current audio context time and start scheduler
        nextBeatTime.current = audioContext.current.currentTime;
        scheduler(beat);
    };

    // stops the scheduler
    const stopScheduler = () => {
        clearTimeout(scheduleTimer.current);
    };

    // sets the beat context to the next beat and returns the next beat
    const iterateBeat = (currentBeat) => {
        let nextBeat = (currentBeat + 1) % 16;
        setBeat(nextBeat);
        return nextBeat;
    };

    // schedules samples to be played in consistent rhythm using the audio
    // context currentTime
    const scheduler = (currentBeat) => {
        while (nextBeatTime.current < audioContext.current.currentTime + 0.1) {
            // iterate current beat to next beat
            currentBeat = iterateBeat(currentBeat);
            // schedule playback of samples if the current beat is selected
            if (trackPatternZero.current[currentBeat])
                playSample(nextBeatTime.current, trackBufferZero.current);
            if (trackPatternOne.current[currentBeat])
                playSample(nextBeatTime.current, trackBufferOne.current);
            if (trackPatternTwo.current[currentBeat])
                playSample(nextBeatTime.current, trackBufferTwo.current);
            if (trackPatternThree.current[currentBeat])
                playSample(nextBeatTime.current, trackBufferThree.current);
            // set next beat time based on current tempo
            nextBeatTime.current += Math.floor(1500 / tempo.current) / 100;
        }
        scheduleTimer.current = setTimeout(() => scheduler(currentBeat), 20);
    };

    // effects

    // start/pause/stop scheduler when isPaused and isPlaying update
    useEffect(() => {
        if (isPlaying && !isPaused) {
            startScheduler();
        } else if (isPlaying && isPaused) {
            stopScheduler();
        } else if (!isPlaying && !isPaused) {
            setBeat(-1);
            stopScheduler();
        }
    }, [isPaused, isPlaying]);

    // initialise audio context settings and load samples on component mount
    useEffect(() => {
        // create new audio context
        audioContext.current = new AudioContext();
        // create main gain node and connect to context destination
        mainGain.current = audioContext.current.createGain();
        mainGain.current.connect(audioContext.current.destination);
        // load samples to buffers
        loadSample(trackSampleZero, trackBufferZero);
        loadSample(trackSampleOne, trackBufferOne);
        loadSample(trackSampleTwo, trackBufferTwo);
        loadSample(trackSampleThree, trackBufferThree);
        // ramp gain to default global values on resumption of audio context
        mainGain.current.gain.exponentialRampToValueAtTime(
            globalVolume * (isGlobalMuted ? 0 : 1),
            audioContext.current.currentTime + 0.001
        );
        audioContext.current.resume();
    }, []);

    // update gain node on volume change 
    useEffect(() => {
        // resume the audio context if it is suspended
        if (audioContext.current.state === "suspended") {
            audioContext.current.resume();
        }
        mainGain.current.gain.exponentialRampToValueAtTime(
            globalVolume * (isGlobalMuted ? 0 : 1) + 0.00001,
            audioContext.current.currentTime + 0.01
        );
    }, [globalVolume, isGlobalMuted]);

    return (
        <>
            <BeatBar beat={beat} />
            <Track
                beat={beat}
                trackName={trackNameZero}
                trackPattern={trackPatternZero}
                trackVolume={trackVolumeZero}
                setTrackVolume={setTrackVolumeZero}
                divider={true}
            />
            <Track
                beat={beat}
                trackName={trackNameOne}
                trackPattern={trackPatternOne}
                trackVolume={trackVolumeOne}
                setTrackVolume={setTrackVolumeOne}
                divider={true}
            />
            <Track
                beat={beat}
                trackName={trackNameTwo}
                trackPattern={trackPatternTwo}
                trackVolume={trackVolumeTwo}
                setTrackVolume={setTrackVolumeTwo}
                divider={true}
            />
            <Track
                beat={beat}
                trackName={trackNameThree}
                trackPattern={trackPatternThree}
                trackVolume={trackVolumeThree}
                setTrackVolume={setTrackVolumeThree}
                divider={false}
            />
        </>
    );
};

export default React.memo(SequencePlayer);
