//Coding Challenge 4

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(bills) {
  for (let i = 0; i < bills.length; i++) {
    bill = bills[i];

    if (bill >= 50 && bill <= 300) {
      tip = bill * 0.15;
    } else {
      tip = bill * 0.2;
    }

    tips.push(tip);
    totals.push(bill + tip);
  }
  // console.log(totals);
  return [tips, totals];
}

function calcAverage(bills) {
  let sum = 0;
  for (let i = 0; i < bills.length; i++) {
    sum = sum + bills[i];
  }
  let average = sum / bills.length;
  return average;
}

let tipsTotals = calcTip(bills);
tips = tipsTotals[0];
totals = tipsTotals[1];
let average = calcAverage(bills);

// console.log(average);
// console.log(bills);
// console.log(tips);
// console.log(totals);

//Cleaned up code:
const calcTipss = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const newTips = [];
const newTotals = [];

for (let i = 0; i < bills.length; i++) {
  const newTip = calcTipss(bills[i]);
  newTips.push(newTip);
  newTotals.push(newTip + bills[i]);
}
console.log(bills, newTips, newTotals);

const newAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
  console.log(sum / arr.length);
  console.log(sum / arr.length);
};

newAverage([3, 3, 3]);
