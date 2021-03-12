const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
  const suffix = e.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.name}`, e.value + suffix);
};

inputs.forEach((input) => {
  input.addEventListener('change', (e) => handleUpdate(e.currentTarget));
});
inputs.forEach((input) => {
  input.addEventListener('mousemove', (e) => handleUpdate(e.currentTarget));
});
