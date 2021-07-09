// Challenge Five

const calcAverage = (dolphinScores, koalaScores) => {
  const averageDolphin = dolphinScores.reduce((a, b) => a + b, 0) / dolphinScores.length;
  const averageKoala = koalaScores.reduce((a, b) => a + b, 0) / koalaScores.length;

  return [averageDolphin, averageKoala];
}

const calcAverageBetter = (a, b, c) => { (a + b + c) / 3 };


const checkWinner = (averageDolphin, averageKoala) => {
  if (averageDolphin >= 2 * averageKoala) {
    console.log(`Dolphins win! ${averageDolphin} vs. ${averageKoala}`);
  } else if (averageKoala >= 2 * averageDolphin) {
    console.log(`Dolphins win! ${averageKoala} vs. ${averageDolphin}`);
  } else {
    console.log(`There are no winners :O ${averageKoala} vs. ${averageDolphin}`);
  }
}

//Case One
let dolphinScores = [44, 23, 71];
let koalaScores = [85, 54, 41];

averages = calcAverage(dolphinScores, koalaScores);
averageDolphin = averages[0];
averageKoala = averages[1];
checkWinner(averageDolphin, averageKoala);

//Case Two
dolphinScores = [65, 54, 49];
koalaScores = [23, 34, 27];

averages = calcAverage(dolphinScores, koalaScores);
averageDolphin = averages[0];
averageKoala = averages[1];
checkWinner(averageDolphin, averageKoala);
