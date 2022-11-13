import React from "react";

import { ControlPanel, TrackPanel } from "./components";
import { SettingsContextProvider, BeatContextProvider } from "./contexts";

function App() {
    return (
        <SettingsContextProvider>
            <main className="appMainContainer">
                <h1 className="title">React Drum Sequencer</h1>
                <ControlPanel />
                <BeatContextProvider>
                    <TrackPanel />
                </BeatContextProvider>
            </main>
        </SettingsContextProvider>
    );
}

export default App;
