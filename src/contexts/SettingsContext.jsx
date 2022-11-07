import React, { useState } from 'react';

export const SettingsContext = React.createContext();

/**
 * Context provider to store and manage global app settings
 */
const SettingsContextProvider = (props) => {
    // store global settings in SettingsContext state
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [globalVolume, setGlobalVolume] = useState(0.6)
    const [tempo, setTempo] = useState(120)

    // declare functions to toggle global play, pause and mute settings
    const togglePlaying = () => {
        isPlaying ? setIsPlaying(false) : setIsPlaying(true);
    }

    const togglePaused = () => {
        isPaused ? setIsPaused(false) : setIsPaused(true);
    }

    const toggleMuted = () => {
        isMuted ? setIsMuted(false) : setIsMuted(true);
    }

    return (
        <SettingsContext.Provider value={{
            isPlaying,
            isPaused,
            isMuted,
            globalVolume,
            tempo,
            setGlobalVolume,
            setTempo,
            togglePlaying,
            togglePaused,
            toggleMuted
        }}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsContextProvider;