import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { TrackControlPanel, TrackBar } from "./";

/**
 * Builds track control panels and track bars and handles pattern shortcut
 * functions for each track.
 */
const Track = ({
    beat,
    trackName,
    trackPattern,
    setTrackPattern,
    trackVolume,
    setTrackVolume,
    divider,
}) => {
    // toggles the track pattern array between 1 and 0 at the submitted index
    const togglePatternAtBeat = useCallback((beatNum) => {
        setTrackPattern((prevTrackPattern) => {
            let newPattern = [...prevTrackPattern];
            newPattern[beatNum] = prevTrackPattern[beatNum] ? 0 : 1;
            return newPattern;
        });
    }, []);

    // clears track pattern array
    const clearPattern = useCallback(() => {
        setTrackPattern(new Array(16).fill(0));
    }, []);

    // toggles a set of beats for the track, defined by the offset and interval
    // e.g. offset 0 / interval 8 toggles the 1st and 9th of 16 beats
    // e.g. offset 1 / interval 4 toggles the 2nd, 6th, 10th and 14th beats
    const toggleSetOfBeats = useCallback((offset, interval) => {
        let anyChanged = false;
        setTrackPattern((prevTrackPattern) => {
            let newPattern = [...prevTrackPattern];
            for (let i = offset; i < newPattern.length; i += interval) {
                if (newPattern[i] === 0) {
                    newPattern[i] = 1;
                    anyChanged = true;
                }
            }
            if (!anyChanged) {
                for (let i = offset; i < newPattern.length; i += interval) {
                    newPattern[i] = 0;
                }
            }
            return newPattern;
        });
    }, []);

    return (
        <>
            <TrackControlPanel
                name={trackName}
                trackVolume={trackVolume}
                setTrackVolume={setTrackVolume}
                toggleSetOfBeats={toggleSetOfBeats}
                clearPattern={clearPattern}
            />
            <TrackBar
                beat={beat}
                trackPattern={trackPattern}
                togglePatternAtBeat={togglePatternAtBeat}
            />
            {divider ? <hr className="trackDivider" /> : <></>}
        </>
    );
};

Track.propTypes = {
    beat: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    trackPattern: PropTypes.array.isRequired,
    setTrackPattern: PropTypes.func.isRequired,
    trackVolume: PropTypes.number.isRequired,
    setTrackVolume: PropTypes.func.isRequired,
    divider: PropTypes.bool.isRequired,
};

export default React.memo(Track);
