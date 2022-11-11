// initialise internal variables

self.timer = null;
self.running = false;
self.interval = null;
self.lastBeat = 0;

// declare worker functions

self.timeNow = () => {
    return Date.now();
};

self.start = (interval) => {
    self.running = true;
    // set target interval
    self.interval = interval;
    // call the sendBeat method 15 milliseconds before the target time
    self.timer = setTimeout(self.sendBeat, self.interval - 15);
};

self.stop = () => {
    self.running = false;
    clearTimeout(self.timer);
    self.timer = null;
};

self.sendBeat = () => {
    // loop while elapsed time is less than target interval
    while (self.running) {
        let currentTime = self.timeNow();
        let elapsedTime = currentTime - self.lastBeat;
        if (elapsedTime >= self.interval) {
            // when target time is reached, update lastBeat time and send beat
            self.lastBeat = currentTime;
            self.running = false;
            postMessage({ msg: "beat" });
        }
    }
};

// set event handlers

self.onmessage = async (event) => {
    if (event && event.data.msg === "start" && !self.running) {
        self.start(event.data.interval);
    }
    if (event && event.data.msg === "stop") {
        self.stop();
    }
};
