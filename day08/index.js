const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  if (hue > 360) hue = 0;
  else hue += 1;
  if (ctx.lineWidth > 199 || ctx.lineWidth < 2) direction = !direction;
  if (direction) ctx.lineWidth += 1;
  else ctx.lineWidth -= 1;
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
canvas.addEventListener('mousedown', (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});
