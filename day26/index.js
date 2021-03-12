const triggers = document.querySelectorAll('.cool > li');
const bg = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const handleEnter = (e) => {
  e.classList.add('trigger-enter');
  setTimeout(() => {
    e.classList.add('trigger-enter-active');
  }, 150);
  bg.classList.add('open');
  const dropdown = e.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };
  bg.style.setProperty('width', `${coords.width}px`);
  bg.style.setProperty('height', `${coords.height}px`);
  bg.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`,
  );
};
const handleLeave = (e) => {
  e.classList.remove('trigger-enter', 'trigger-enter-active');
  bg.classList.remove('open');
};

triggers.forEach((trigger) => {
  trigger.addEventListener('mouseenter', (e) => handleEnter(e.currentTarget));
});
triggers.forEach((trigger) => {
  trigger.addEventListener('mouseleave', (e) => handleLeave(e.currentTarget));
});
