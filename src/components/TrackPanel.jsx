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
        <div>
            <h2>TrackPanel</h2>
            <BeatBar />
            {samples.map(sample => <Track key={sample.name} name={sample.name} sample={sample.sample} />)}
        </div>
    );
};

export default TrackPanel;
