import React, { useCallback, useState } from "react";
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
    trackVolume,
    setTrackVolume,
    divider,
}) => {
    const [trackPatternState, setTrackPatternState] = useState(
        trackPattern.current
    );
    // toggles the track pattern array between 1 and 0 at the submitted index
    const togglePatternAtBeat = useCallback((beatNum) => {
        trackPattern.current[beatNum] = trackPattern.current[beatNum] ? 0 : 1;
        setTrackPatternState([...trackPattern.current]);
    }, []);

    // clears track pattern array
    const clearPattern = useCallback(() => {
        trackPattern.current.fill(0);
        setTrackPatternState(trackPattern.current);
    }, []);

    // toggles a set of beats for the track, defined by the offset and interval
    // e.g. offset 0 / interval 8 toggles the 1st and 9th of 16 beats
    // e.g. offset 1 / interval 4 toggles the 2nd, 6th, 10th and 14th beats
    const toggleSetOfBeats = useCallback((offset, interval) => {
        let anyChanged = false;
        for (let i = offset; i < trackPattern.current.length; i += interval) {
            if (trackPattern.current[i] === 0) {
                trackPattern.current[i] = 1;
                anyChanged = true;
            }
        }
        if (!anyChanged) {
            for (
                let i = offset;
                i < trackPattern.current.length;
                i += interval
            ) {
                trackPattern.current[i] = 0;
            }
        }
        setTrackPatternState([...trackPattern.current]);
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
                trackPattern={trackPatternState}
                togglePatternAtBeat={togglePatternAtBeat}
            />
            {divider ? <hr className="trackDivider" /> : <></>}
        </>
    );
};

Track.propTypes = {
    beat: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    trackPattern: PropTypes.object.isRequired,
    trackVolume: PropTypes.number.isRequired,
    setTrackVolume: PropTypes.func.isRequired,
    divider: PropTypes.bool.isRequired,
};

export default React.memo(Track);
