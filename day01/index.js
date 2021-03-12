const keys = document.querySelectorAll('.key');

const removeClassOnTransitionEnd = (e) => {
  if (e.propertyName !== 'transform') return;
  e.srcElement.classList.remove('playing');
};

const playSound = (key) => {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const currentKey = document.querySelector(`.key[data-key="${key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  currentKey.classList.add('playing');
};

window.addEventListener('keydown', (e) => playSound(e.key));

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    window.navigator.vibrate(50);
    playSound(
      e.currentTarget.querySelector('kbd').innerText.toLocaleLowerCase(),
    );
  });
  key.addEventListener('transitionend', removeClassOnTransitionEnd);
});
