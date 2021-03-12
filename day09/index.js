const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelectorAll('p');
  p.forEach((e) => {
    e.style.color = '#606060';
    e.style.fontSize = '50px';
  });
}
setTimeout(() => {
  makeGreen();
}, 3000);
// Regular
console.log('Ye');
// Interpolated
console.log('%s', 'yeeeeeeeeeeeeeee');
console.log(`wassup ${dogs[1].name}`);
// Styled
console.log('%c damn this text BRO WATCH OUT', 'font-size:50px');
// warning!

// Error :|
console.error('WHAT THE FUCK');
// Info
console.info('Yeet info');
// Testing
console.assert(1 === 2, 'WRONG!');
// clearing
setTimeout(() => {
  console.clear();
  console.log('hehe');
}, 7000);
// Viewing DOM Elements
console.log(document.querySelector('p'));
// Grouping together
dogs.forEach((dog) => {
  console.log(`dog's name : ${dog.name}`);
  console.log(`dog's age : ${dog.age}`);
});
// counting
console.count('haha');
console.count('haha');
console.count('haha');
console.count('haha');
console.count('haha');
console.count('haha');
// timing
console.time();
setTimeout(() => {
  console.timeEnd();
}, 3000);
