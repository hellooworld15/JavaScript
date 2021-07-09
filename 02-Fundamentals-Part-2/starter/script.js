//Lecture 32: Activating strict mode

'use strict'; //activated strict code - must go first to activate

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive!');

// const interface = 'Audio'; //reserved Identifier

// //Lecture 33:Functions
// function logger() {
//   console.log('My name is Jonas');
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

//Lecture 34: Function Declarations vs Expressions

// //funciton declaration
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
//   // return 2037 - birthYear;
// }
// calcAge1(1991);
// console.log(calcAge1(1991));

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Lecture 35: Arrow Functions

// //arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUnttilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearUnttilRetirement(1991, 'Jonas'));
// console.log(yearUnttilRetirement(1980, 'Bob'));

// //Lecture 36: Functions Calling Functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

//Lecture 37: Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const yearUnttilRetirement = function (birthYear, firstName) {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   if (retirement > 0) {

//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {

//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
//   //return `${firstName} retires in ${retirement} years`;
// }

// yearUnttilRetirement(1991, 'Jonas');

// console.log(yearUnttilRetirement(1991, 'Jonas'));
// console.log(yearUnttilRetirement(1958, 'Mike'));

//Lecture 39: Introduction to arrays

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// //const years = new Array(1998, 1994, 2008, 2070);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); //last item in array
// friends[2] = 'Jay';
// console.log(friends);
// //friends = ['Bob','Alice'];
// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;

// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// //Lecture 40: Basic Array Operations
// const friends = ['Micheal', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');

// //friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //Remove elements
// friends.pop(); // Last item removed
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.unshift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23)); //true
// console.log(friends.includes('23')); //false

// if (friends.includes('Peter')) {
//   console.log('You have a friend named Peter')
// }

// //Lecture 43: Dot and Bracket notation

// const jonasArray = [
//   'Jonas',
//   'Schem',
//   2037,
//   'teacher',
//   ['micheal', 'peter', 'steven']
// ]

// //defining an object- object literal syntax
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schemedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['micheal', 'peter', 'steven']
// };

//Lecture 44: Object methods

//defining an object- object literal syntax
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schemedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['micheal', 'peter', 'steven'],
//   hasDriversLicence: false,

//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's license.`
//   }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSummary());

//console.log(jonas['calcAge'](1991));
// "Jonas is a 46- year old teacher, and he has a drivers license"

//Lecture 46: Iteration: The loop

// //for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifiting weights repetition ${rep}`);
// };

// //Lecture 47: Looping Arrays, Breaking and continuing
// const jonas = [
//   'Jonas',
//   'Schemedtmann',
//   2037 - 1991,
//   'teacher',
//   ['micheal', 'peter', 'steven'],
//   true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {

//   //Reading Jonas Array
//   console.log(jonas[i], typeof jonas[i]);

//   //Filling types array
//   //types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);

// };
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {

//   //adding to new array
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break

// console.log('-------ONLY STRINGS ------- ')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('-------BREAK WITH NUMBER ------- ')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

//Lecture 48: Looping backwards and Loops in Loops

// const jonas = [
//   'jonas',
//   'Schmd',
//   2037 - 1991,
//   'teacher',
//   ['Micheal', 'peter', ' Steven']
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifitng weight repetition ${rep}`);
//   }
// }

//Lecture 49: While loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifitng weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifitng weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice != 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to eend');
// }

'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
