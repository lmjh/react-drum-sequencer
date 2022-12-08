import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";

export const SettingsContext = React.createContext();

/**
 * Context provider to store and manage global app settings
 */
const SettingsContextProvider = (props) => {
    // store global settings in SettingsContext state
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isGlobalMuted, setIsGlobalMuted] = useState(false);
    const [globalVolume, setGlobalVolume] = useState(0.6);
    const tempo = useRef(90);
    const analyser = useRef();

    // declare functions to toggle global play, pause and mute settings
    const togglePlayPause = useCallback(() => {
        if (isPlaying && !isPaused) {
            // pause if playing and unpaused
            setIsPaused(true);
        } else if (isPlaying && isPaused) {
            // unpause if playing and paused
            setIsPaused(false);
        } else {
            // play and unpause if not playing
            setIsPaused(false);
            setIsPlaying(true);
        }
    }, [isPlaying, isPaused]);

    const stopPlaying = useCallback(() => {
        setIsPlaying(false);
        setIsPaused(false);
    }, []);

    const toggleGlobalMute = useCallback(() => {
        isGlobalMuted ? setIsGlobalMuted(false) : setIsGlobalMuted(true);
    }, [isGlobalMuted]);

    return (
        <SettingsContext.Provider
            value={{
                isPlaying,
                isPaused,
                isGlobalMuted,
                globalVolume,
                tempo,
                analyser,
                setGlobalVolume,
                togglePlayPause,
                stopPlaying,
                toggleGlobalMute,
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    );
};

SettingsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SettingsContextProvider;
