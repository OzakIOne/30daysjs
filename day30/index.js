const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

const randTime = (min, max) => Math.round(Math.random() * (max - min) + min);

const randHole = (Holes) => {
  const idx = Math.floor(Math.random() * Holes.length);
  const hole = Holes[idx];
  if (hole === lastHole) return randHole(Holes);
  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randTime(200, 1000);
  const hole = randHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
};

const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
};

const bonk = (e) => {
  if (!e.isTrusted) return;
  score += 1;
  e.currentTarget.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
};

moles.forEach((mole) => mole.addEventListener('click', (e) => bonk(e)));
