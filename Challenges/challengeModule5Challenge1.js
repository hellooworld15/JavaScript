//Coding Challenge 1

let tempDataOne = [17, 21, 23];
let tempDataTwo = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let sentence = [];
  for (let i = 0; i < arr.length; i++) {
    let partSentence = `${arr[i]} in ${i + 1} days ...`;
    sentence += partSentence;
  }
  return sentence;
}

const forcastDayOne = printForecast(tempDataOne);
console.log(forcastDayOne);

const forcastDayTwo = printForecast(tempDataTwo);
console.log(forcastDayTwo);
