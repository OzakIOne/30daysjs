const ratio = 0.9;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio,
};

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
const imgs = document.querySelectorAll('.slide-in');
imgs.forEach((img) => {
  observer.observe(img);
});
// observer.observe();
