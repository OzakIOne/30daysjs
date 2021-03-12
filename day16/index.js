const div = document.querySelector('div');
const title = document.querySelector('h1');
const walk = 50;

const shadow = (e) => {
  const { offsetHeight: height, offsetWidth: width } = div;
  let { offsetX: x, offsetY: y } = e;
  if (e.currentTarget !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);
  title.style.textShadow = `#aaa ${xWalk}px ${yWalk}px 10px`;
};

div.addEventListener('mousemove', (e) => shadow(e));
