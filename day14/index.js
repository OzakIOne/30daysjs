let age = 20;
let age2 = age;
age = 40;

let pseudo = 'ozaki';
let pseudo2 = pseudo;
pseudo = 'eurobeat';

// Let's say we have an array and we want to make a copy of it. We can just do something like this:
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players; // we have edited the original array vecause thats an array reference, not an array copy. They both point to the same array!
team[3] = 'Michel';

// How to copy :
// pattern 1
const team2 = players.slice();
team2[2] = 'Michel';
// pattern 2
const team3 = [].concat(players);
// pattern 3 (best)
const team4 = [...players];

// The same thing goes for objects, let's say we have a person object
const person = {
  name: 'Wes Bos',
  age: 80,
};

// and think we make a copy:
const cpt = person;
cpt.number = 99;

// How to copy :
// pattern 1
const cpt2 = Object.assign({}, person, { person: 99, age: 20 });

// pattern 2 (best)
const cpt3 = { ...person };

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const ozaki = {
  name: 'ozaki',
  age: 20,
  social: {
    twitter: '@ozaki',
    facebook: 'fuck facebook',
  },
};

const cpt4 = { ...ozaki };
cpt4.age = 50;
cpt4.social.twitter = 'wtf';
// Bypass
const cpt5 = JSON.parse(JSON.stringify(ozaki));
