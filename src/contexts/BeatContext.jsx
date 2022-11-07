import React, { useContext, useState, useEffect } from 'react';
import { SettingsContext } from './SettingsContext';

export const BeatContext = React.createContext();

/**
 * Context provider to track and iterate the current beat
 */
const BeatContextProvider = (props) => {
    const [beat, setBeat] = useState(-1);
    const { isPlaying, isPaused,  tempo } = useContext(SettingsContext);

    // time between beats (in milliseconds) is 60,000 divided by tempo (in beats per minute)
    const beatLength = 60000 / tempo;

    // iterate beat, looping between 0 and 15
    // set beat to -1 if stopped
    const nextBeat = () => {
        if (isPlaying && !isPaused) {
            beat < 15 ? setBeat(prev => prev + 1) : setBeat(0);
        } else if (!isPlaying && !isPaused) {
            setBeat(-1);
        }
    }

    // set interval between beat iteration based on tempo
    useEffect(() => {
        const interval = setInterval(() => nextBeat(), beatLength);
        return () => clearInterval(interval);
      });

    return (
        <BeatContext.Provider value={{ beat }}>
            {props.children}
        </BeatContext.Provider>
    )
}

export default BeatContextProvider;
