const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = (e) => {
  const link = e.currentTarget.getBoundingClientRect();
  const coords = {
    width: link.width,
    height: link.height,
    top: link.top + window.scrollY,
    left: link.left + window.scrollX,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px`;
};

triggers.forEach((a) => a.addEventListener('mouseenter', (e) => highlightLink(e)));
