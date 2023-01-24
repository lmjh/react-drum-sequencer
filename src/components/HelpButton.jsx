import React from "react";

import {
    playbackControls,
    selectBeats,
    shortcuts,
    trackVolume,
    volumeTempo,
} from "../images/";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modali, { useModali } from "modali";


/**
 * Button that opens a help modal with information about the app
 */
const HelpButton = () => {
    const [helpModal, toggleHelpModal] = useModali({
        animated: true,
        title: "How To Use RDS",
    });
    return (
        <>
            <button
                className="helpButton"
                aria-label="Open help modal"
                onClick={toggleHelpModal}
            >
                <div className="helpButtonInner">
                    <FontAwesomeIcon icon="fa-regular fa-circle-question" />
                </div>
            </button>

            <Modali.Modal {...helpModal}>
                <p className="helpContent">
                    To create a drum sequence, click the buttons corresponding
                    to the beats where you want to play samples.
                </p>
                <div className="helpImageContainer">
                    <img src={selectBeats} className="helpImage" />
                </div>
                <p className="helpContent">
                    You can use the shortcut keys on each track to quickly
                    toggle sets of beats.
                </p>
                <div className="helpImageContainer">
                    <img src={shortcuts} className="helpImage" />
                </div>
                <p className="helpContent">
                    The main playback controls in the top control panel allow
                    you to Play, Pause, Stop or Mute the drum sequence.
                </p>
                <div className="helpImageContainer">
                    <img src={playbackControls} className="helpImage" />
                </div>
                <p className="helpContent">
                    You can also set the global volume and tempo of the sequence in
                    the top control panel.
                </p>
                <div className="helpImageContainer">
                    <img src={volumeTempo} className="helpImage" />
                </div>
                <p className="helpContent">
                    Each track also has a volume control, so you can adjust the
                    balance of the samples.
                </p>
                <div className="helpImageContainer">
                    <img src={trackVolume} className="helpImage" />
                </div>
            </Modali.Modal>
        </>
    );
};

export default HelpButton;
