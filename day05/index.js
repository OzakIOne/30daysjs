const panels = document.querySelectorAll('.panel');

const toggleActive = (e, className) => {
  console.log(e);
  e.classList.toggle(className);
};

panels.forEach((e) => {
  e.addEventListener('click', (ev) => toggleActive(ev.currentTarget, 'open'));
});

panels.forEach((e) => {
  e.addEventListener('transitionend', (ev) => toggleActive(ev.currentTarget, 'open-active'));
});
