const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642,
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630,
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543,
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947,
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905,
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
  },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const yearFilter = (obj, lowerLimit, upperLimit) => obj.year >= lowerLimit && obj.year < upperLimit;
const bornBetween = (a, b) => inventors.filter((e) => yearFilter(e, a, b));
console.log(bornBetween(1500, 1600));

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const printNames = () => inventors.map((e) => e.first);
console.log(printNames());

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortByYoungest = () => inventors.sort((a, b) => a.year - b.year);
console.log(sortByYoungest());

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalLifeSpan = () => inventors.reduce((acc, b) => acc + b.year, 0);
console.log(totalLifeSpan());

// 5. Sort the inventors by years lived
const sortByAge = () => inventors.sort((a, b) => a.passed - a.year - (b.passed - b.year));
console.log(sortByAge());

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const links = document.querySelectorAll('.mw-category a');
const filteredLinks = () => [...links].filter((e) => e.text.includes('de'));
console.log(filteredLinks());

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortByLastName = () => inventors.sort((a, b) => a.last.localeCompare(b.last));
console.log(sortByLastName());

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];
const sumUp = () => data.reduce((res, el) => {
  if (!res[el]) res[el] = 0;
  res[el] += 1;
  return res;
}, {});
console.log(sumUp());
