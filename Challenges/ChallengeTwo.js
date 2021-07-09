let nameMark = 'Mark';
let nameJohn = 'John';
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI); //true


if (markHigherBMI) {
  console.log(`${nameMark}'s BMI (${bmiMark}) is higher than ${nameJohn}'s (${bmiJohn})!`)
} else {
  console.log(`${nameJohn}'s BMI (${bmiJohn}) is higher than ${nameMark}'s (${bmiMark})!`)
};

//Data set 2 
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI); //true

if (markHigherBMI) {
  console.log(`${nameMark}'s BMI (${bmiMark}) is higher than ${nameJohn}'s (${bmiJohn})!`)
} else {
  console.log(`${nameJohn}'s BMI (${bmiJohn}) is higher than ${nameMark}'s (${bmiMark})!`)
};