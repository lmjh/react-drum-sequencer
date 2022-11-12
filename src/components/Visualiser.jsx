import { Howler } from "howler";

import React, { useRef, useEffect, useContext } from "react";
import { SettingsContext } from "../contexts";

/**
 * Generates and renders a visualisation of the audio output.
 * Based on the oscilloscope visualization in the MDN web docs:
 * developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
 */
const Visualiser = () => {
    const isPlaying = useContext(SettingsContext);

    const analyser = useRef(null);
    const canvasRef = useRef(null);
    const getFrame = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            // call a method of the Howler object to trigger creation of the
            // audio context
            Howler.mute(false);

            // create an analyser node from the Howler global context
            analyser.current = Howler.ctx.createAnalyser();
            // connect the analyser to the Howler master gain node
            Howler.masterGain.connect(analyser.current);

            // capture data from analyser
            const bufferLength = analyser.current.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            // assign canvas, context and canvas dimensions to constants
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            const width = canvas.width;
            const height = canvas.height;

            const draw = () => {
                // use requestAnimationFrame to loop over data
                getFrame.current = requestAnimationFrame(draw);

                // configure visualiser style
                context.fillStyle = "#101010";
                context.lineWidth = 2;
                context.strokeStyle = "#36fe2c";

                // get data
                analyser.current.getByteTimeDomainData(dataArray);

                // fill background and start line path 
                context.fillRect(0, 0, width, height);
                context.beginPath();

                // iterate over data and draw to canvas
                const sliceWidth = context.canvas.width / bufferLength;
                let x = 0;
                for (let i = 0; i < bufferLength; i++) {
                    const v = dataArray[i] / 128.0;
                    const y = v * (context.canvas.height / 2);

                    if (i === 0) {
                        context.moveTo(x, y);
                    } else {
                        context.lineTo(x, y);
                    }

                    x += sliceWidth;
                }
                context.lineTo(context.canvas.width, context.canvas.height / 2);
                context.stroke();
            };

            draw();
        }
        return () => {
            // cleanup on dismount
            cancelAnimationFrame(getFrame.current);
            analyser.current.disconnect();
        };
    }, [isPlaying]);

    return <canvas ref={canvasRef} id="visualiser" width="300px" height="150px" />;
};

export default Visualiser;
