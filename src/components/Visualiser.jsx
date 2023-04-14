// import { Howler } from "howler";

import React, { useContext, useEffect, useMemo, useRef } from "react";
import { SettingsContext } from "../contexts";

/**
 * Generates and renders a visualisation of the audio output.
 * Based on the oscilloscope visualization in the MDN web docs:
 * developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
 */
const Visualiser = () => {
    const { isPlaying, analyser, darkMode } = useContext(SettingsContext);

    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const getFrame = useRef(null);
    const lineStlye = useMemo(
        () => (darkMode ? "#27beff" : "#053e56"),
        [darkMode]
    );

    useEffect(() => {
        if (isPlaying) {
            // capture data from analyser
            const bufferLength = analyser.current.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            // assign canvas, context and canvas dimensions to constants
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            // get current width and height of parent container
            const width = containerRef.current.offsetWidth;
            const height = containerRef.current.offsetHeight;

            // if canvas is not same size as container, update canvas size
            if (canvas.width != width) canvas.width = width;
            if (canvas.height != height) canvas.height = height;

            const draw = () => {
                // use requestAnimationFrame to loop over data
                getFrame.current = requestAnimationFrame(draw);

                // configure visualiser style
                context.fillStyle = lineStlye;
                context.lineWidth = 2;
                context.strokeStyle = lineStlye;

                // get data
                analyser.current.getByteTimeDomainData(dataArray);

                // fill background and start line path
                context.clearRect(0, 0, width, height);
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
        } else {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            // get current width and height of parent container
            const width = containerRef.current.offsetWidth;
            const height = containerRef.current.offsetHeight;

            // if canvas is not same size as container, update canvas size
            if (canvas.width != width) canvas.width = width;
            if (canvas.height != height) canvas.height = height;

            // configure visualiser style
            context.fillStyle = lineStlye;
            context.lineWidth = 2;
            context.strokeStyle = lineStlye;

            // fill background and start line path
            context.clearRect(0, 0, width, height);
            context.beginPath();

            // draw line across center of canvas
            context.moveTo(0, context.canvas.height / 2);
            context.lineTo(context.canvas.width, context.canvas.height / 2);
            context.stroke();
        }
        return () => {
            // cleanup on dismount
            cancelAnimationFrame(getFrame.current);
            analyser.current.disconnect();
        };
    }, [isPlaying, darkMode]);

    return (
        <div className="visualiserContainer">
            <div ref={containerRef} className="visualiserContainerInner">
                <canvas
                    ref={canvasRef}
                    id="visualiser"
                    className="visualiser"
                />
            </div>
        </div>
    );
};

export default Visualiser;
