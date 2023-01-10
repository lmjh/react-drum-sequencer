import { default as floortom } from "./floortom.wav";
import { default as hihat } from "./hihat.wav";
import { default as snare } from "./snare.wav";
import { default as bass } from "./bass.wav";


// samples sourced from https://www.indiedrums.com/2012/10/10/free-drums-samples-rock-kit/
const samples = [
    { name: "Bass", sample: bass },
    { name: "Snare", sample: snare },
    { name: "Hi-hat", sample: hihat },
    { name: "Floor Tom", sample: floortom },
];

export default samples;
