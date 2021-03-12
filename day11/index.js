const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
let mousedown = false;

const togglePlay = () => {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
};

const updateButton = (e) => {
  const icon = e.paused ? 'Pausing' : 'Playing';
  toggle.textContent = icon;
};

const skip = (e) => (video.currentTime += parseFloat(e.dataset.skip));

const handleRange = (e) => {
  video[e.name] = e.value;
  document.querySelector(`.${e.name}`).textContent = e.value;
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('pause', (e) => updateButton(e.currentTarget));
video.addEventListener('play', (e) => updateButton(e.currentTarget));
video.addEventListener('timeupdate', () => handleProgress());
skipButtons.forEach((button) => {
  button.addEventListener('click', (e) => skip(e.currentTarget));
});
ranges.forEach((range) => {
  range.addEventListener('change', (e) => handleRange(e.currentTarget));
});
ranges.forEach((range) => {
  range.addEventListener('mousemove', (e) => handleRange(e.currentTarget));
});
progress.addEventListener('click', (e) => scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
