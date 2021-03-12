let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endtime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
  console.log({ minutes, remainderSeconds });
};

const displayEndTime = (timeStamp) => {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endtime.textContent = `Be Back At ${adjustedHour}:${minutes}`;
};

const timer = (seconds) => {
  const now = Date.now();
  const then = now + seconds * 1000;

  clearInterval(countdown);

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const startTimer = (e) => {
  const seconds = parseInt(e.currentTarget.dataset.time, 10);
  timer(seconds);
};
buttons.forEach((button) => button.addEventListener('click', (e) => startTimer(e)));
document.customForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const mins = e.currentTarget.minutes.value;
  timer(mins * 60);
  e.currentTarget.reset();
});
