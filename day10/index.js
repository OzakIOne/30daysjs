const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
const handlecheck = (e) => {
  let between = false;
  if (e.shiftKey && e.currentTarget.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.currentTarget || checkbox === lastChecked) {
        between = !between;
      }
      if (between) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = e.currentTarget;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => handlecheck(e));
});
