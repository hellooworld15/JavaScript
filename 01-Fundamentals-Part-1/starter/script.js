/* Lecture 11: Values and Variables
let js = 'amazing';
if (js === 'amazing') alert('Javascript is fun');

console.log(40 + 23 + - 10);
console.log('Jonas');
console.log(23);

let firstName = "Bob";
let first = 'jonas';
let firstNamePerson = [];

console.log(firstName);

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';


console.log(myFirstJob);
//variable name convention
*/


/*
//lecture 12: Data Types
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year; //undefined - no value present
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); // shows as an object
*/

/*

//Lecture 13: let, const, var
let age = 30;
age = 31; //re-assigning a variable - mutated
const birthYear = 1991; //unable to change value of const variable - TYPEERRROR
const job;  // SyntaxError: Needs inital value for const
var job = 'programmer';
job = 'teacher';
lastName = 'Schemdtmann' //terrible idea - no scope
console.log(lastName);
*/

/*
//Lecture 14
const year = 2037;
const ageJonas = year - 1991;
const ageSarah = year - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 is 2 to the power of 3
const firstName = 'Jonas';
const lastName = 'Schmemsk';
console.log(firstName + ' ' + lastName);
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; //x = x * 4 = 100
x++ // x = x + 1
x-- // x = x - 1
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // <, >, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(ytear - 1998 > year - 2018);
*/

/*
//lecture 15
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 1998);
console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
//Useful Informatiton: operator precedance
*/

// //lecture 17
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = 'I\'m ' + firstName + ', a ' + [year - birthYear] + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log('Just a regular string....');

// console.log('String with \n\ multiple \n\ lines');

// console.log(`String 
// multiple
// lines`);

// //lecture 18 
// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license')
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years `)
// };

// // //control structure
// // if () {

// // } else {

// // };
// let century;
// const birthYear = 2012;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century); 

// //lecture 20
// //Type conversion - manual 
// //type coercion - automatic by Javascript

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear + 18));


// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion 
// console.log('I am ' + 23 + ' years old'); //converts numbers to strings
// console.log('23' - '10' - 3);//strings converted to numberrs 
// console.log('23' * '3');
// console.log('23' > '10');

// //game 
// let n = '1' + 1;
// n = n - 1;
// console.log(n); //gives 10 answer

// ///lecture 21: Truthy and Falsy values, ' '', undefined, null, NaN
// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('Jonas')); //true
// console.log(Boolean({})); //true

// const money = 100;

// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You shoould get a job!')
// };


// let height = 0;
// if (height) {
//   console.log('YAY! heigh is defined');
// } else {
//   console.log('Height is UNDEFINED')
// }

//lecture 22: Eqality Operators

// const age = 18;
// if (age === 18) console.log('You just became an adult (strict)'); //both sides must be exactly the same - strict operator === , loose ==
// if (age == '18') console.log('You just became an adult (loose)');
// //avoid loose equality

// const favourite = Number(prompt("Whats your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 is an amazing nnumber!')
// } else if (favourite === 7) {
//   console.log('7 is alos a cool number')
// } else {
//   console.log('Number is not 233 or 7 ');
// };

// if (favourite !== 23) console.log('Why not 23?');

//lecture 23: boolean Logic, AND, OR and NOT Operators 

// //lecture 24: Logical Operators 
// const hasDriverslicence = true // 
// const hasGoodVision = false // 

// console.log(hasDriverslicence && hasGoodVision); //false
// console.log(hasDriverslicence || hasGoodVision); //true 
// console.log(hasDriverslicence);

// const shouldDrive = hasDriverslicence && hasGoodVision;

// if (ShouldDrive) {
//   console.log('Sarah is able to drive')
// } else {
//   'Someone else should drive'
// };

// const isTired = true;

// console.log(hasDriverslicence || hasGoodVision || isTired);
// console.log(hasDriverslicence && hasGoodVision && isTired);

// if (hasDriverslicence && hasGoodVision && !isTired) {
//   console.log('Sarash is able to drive')
// } else { console.log('Someone else shoudl drive... ') };

// //lecture 26: Switch Statement 
// const day = 'monday';
// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Recode videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// //As an if/else statment 
// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
// } else {
//   console.log('Not a valid day!');
// }

// //lecture 27:statements and Expressions 
// 3 + 4 //expression 
// 1991 //expression 
// true && false && !false //expression 
// if (23 > 10) {
//   const str = '23';
// }; //statement 

// console.log(`I'm ${2037 - 1991} years old `);

// //lecture 28: The conditional (ternary) Operator
// const age = 21;
// age >= 18 ? console.log('I like to drink wine') :
//   console.log('I like to drink water');

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink = 'water';
// }
// //console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);