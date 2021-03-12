const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

const logText = (e) => {
  console.log(e.currentTarget);
  e.stopPropagation();
};

divs.forEach((div) => div.addEventListener('click', (e) => logText(e), { capture: false }));

button.addEventListener(
  'click',
  () => {
    console.log('Clicked!');
  },
  { once: true },
);
