const pressed = [];
const code = 'lmaoooo';
const desc = document.querySelector('.desc');
const secret = document.querySelector('.secret');
secret.textContent = code;

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-code.length - 1, pressed.length - code.length);
  if (pressed.join('').includes(code)) desc.textContent = 'Code successful';
});
