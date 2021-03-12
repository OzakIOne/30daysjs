const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const StartClock = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = date.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = date.getHours();
  const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
};
setInterval(StartClock, 1000);
