const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const date = new Date();
const currentYear = date.getFullYear();
const adult = (e) => currentYear - e.year > 18;
const some = people.some(adult);
const every = people.every(adult);
console.log(some);
console.log(every);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const idQuery = (e, id) => e.id === id;
const find = comments.find((e) => idQuery(e, 823423));
console.log(find);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const indexQuery = (e, index) => e.id === index;
const findIndex = (id) => comments.findIndex((e) => indexQuery(e, id));
const removeIndex = (id) => comments.splice(findIndex(id), id !== undefined ? 1 : 0);
removeIndex(542328);
console.log(comments);
