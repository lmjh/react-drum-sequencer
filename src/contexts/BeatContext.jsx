import React, { useContext, useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";

import { SettingsContext } from "./SettingsContext";

export const BeatContext = React.createContext();

/**
 * Context provider to track and iterate the current beat.
 * Uses a web worker to manage time between beats in a separate thread.
 */
const BeatContextProvider = (props) => {
    const [beat, setBeat] = useState(-1);
    const { isPlaying, isPaused, tempo } = useContext(SettingsContext);

    const timeKeeper = useMemo(
        () => new Worker("/workers/timeKeeper.js"),
        ["/workers/timeKeeper.js"]
    );

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
        <BeatContext.Provider value={{ beat }}>
            {props.children}
        </BeatContext.Provider>
    );
};

BeatContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BeatContextProvider;
