const timeNodes = [...document.querySelectorAll('[data-time]')];
const timeCode = timeNodes.map((node) => node.dataset.time);
const timeToSeconds = timeCode.map((tc) => {
  const [m, s] = tc.split(':').map(parseFloat);
  return m * 60 + s;
});
const total = timeToSeconds.reduce((totalSec, vidSec) => totalSec + vidSec);
const hour = Math.floor(total / 3600);
const min = Math.floor((total % 3600) / 60);
console.log('timeToSeconds:', timeToSeconds);
console.log('total:', total);
console.log('hour:', hour);
console.log('min:', min);
