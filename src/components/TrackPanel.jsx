import React from "react";

import { BeatBar, Track } from "./";
import samples from "../audio";

/**
 * Displays the BeatBar and builds and displays array of Tracks from imported
 * samples. Samples must be imported as an array of objects in this format:
 * [{name: "unique-sample-name", sample: "link-to-sample.wav"}]
 */
const TrackPanel = () => {
    return (
        <>
            <BeatBar />
            {samples.map((sample, index) => (
                <Track
                    key={sample.name}
                    name={sample.name}
                    sample={sample.sample}
                    divider={index < samples.length - 1}
                />
            ))}
        </>
    );
};

export default TrackPanel;
