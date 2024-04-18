// list of rockets to burn, containing the rocket and the countdown time
const launchPlan = [
    {rocket: "discovery", countdown: 5},
    {rocket: "apollo", countdown: 4},
    {rocket: "voyager", countdown: 6},
    {rocket: "cassini", countdown: 9},
    {rocket: "curiosity", countdown: 3},
];

/**
 * handy sleep function which is used in the countdown
 * 
 * @param {number} ms - The number of milliseconds to sleep
 * @returns {void}
 */
async function sleep(ms) {
    // so sorry.... there is no sleep for javascript in the browser...
    await new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * this function handles the countdown and lauch
 * of a single rocket
 * 
 * @param {string} rocketID - The html id (rocket name) of the rocket element
 * @param {number} count - Countdown from 
 */
async function launchRocket(rocketID, count) {
    // get counter on top of the rocket so it can be updated during the countdown
    const counterElement = document.querySelector(`#${rocketID} .counter`);
    
    /** countdown to 1 and update the counter (top of rocket) on each step */
    for (let counter=count; counter > 0; counter--) {
        counterElement.innerHTML = counter;
        await sleep(1000); // sleep for a second
    }

    /** stuff after countdown --> launch
     * - 'remove' the counter on rocket top
     * - get the rocketelement
     * - add the class which does the animation (make it go up)
     */
    counterElement.innerHTML = "";
    const rocket = document.getElementById(rocketID);
    rocket.classList.add('launch-rocket');
}

/**
 * lets get some rockets into the air!!!
 */
for (const launch of launchPlan) {
    launchRocket(launch.rocket, launch.countdown);
}