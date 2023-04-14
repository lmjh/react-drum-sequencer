import React from "react";

import { ControlPanel, Header, SequencePlayer, Footer } from "./components";
import { SettingsContextProvider } from "./contexts";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPlay,
    faPause,
    faStop,
    faVolumeXmark,
    faVolumeHigh,
    faBan,
    faSun,
    faMoon,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faPlay,
    faPause,
    faStop,
    faVolumeXmark,
    faVolumeHigh,
    faBan,
    faSun,
    faMoon,
    faQuestion
);

function App() {
    return (
        <SettingsContextProvider>
            <main className="appMainContainer">
                <Header />
                <ControlPanel />
                <SequencePlayer />
            </main>
            <Footer />
        </SettingsContextProvider>
    );
}

export default App;
