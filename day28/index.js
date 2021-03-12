const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

const handleSpeed = (e) => {
  const y = e.pageY - e.currentTarget.offsetTop;
  const percent = y / e.currentTarget.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = `${Math.round(percent * 100)}%`;
  const playbackrate = percent * (max - min) + min;

  bar.textContent = playbackrate.toFixed(2);
  bar.style.height = height;

  video.playbackRate = playbackrate;
};

speed.addEventListener('mousemove', (e) => handleSpeed(e));
