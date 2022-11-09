import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { SettingsContext } from "./SettingsContext";

export const BeatContext = React.createContext();

/**
 * Context provider to track and iterate the current beat
 */
const BeatContextProvider = (props) => {
    const [beat, setBeat] = useState(-1);
    const { isPlaying, isPaused, tempo } = useContext(SettingsContext);

    // time between quarter beats (in milliseconds) is 15,000 divided by tempo (in beats per minute)
    const beatLength = 15000 / tempo.current;

    useEffect(() => {
        // set beat to -1 if stopped
        if (!isPlaying && !isPaused) {
            setBeat(-1);
        }
        // iterate beat, looping between 0 and 15
        const nextBeat = () => {
            if (isPlaying && !isPaused) {
                beat < 15 ? setBeat((prev) => prev + 1) : setBeat(0);
            }
        };
        // set interval between beat iteration based on tempo
        const interval = setInterval(() => nextBeat(), beatLength);
        return () => clearInterval(interval);
    }, [beatLength, beat, isPaused, isPlaying]);

    return (
        <BeatContext.Provider value={{ beat }}>
            {props.children}
        </BeatContext.Provider>
    );
};

BeatContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BeatContextProvider;
