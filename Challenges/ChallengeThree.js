//Case 1 
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

let averageDolphins = dolphins.reduce(function (a, b) { return a + b }, 0) / dolphins.length;
console.log('average of Dolphins' + averageDolphins);
let averageKoalas = koalas.reduce(function (a, b) { return a + b }, 0) / koalas.length;
console.log('average of Koalas' + averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins > 100) {
  console.log('Dolphins are the winners');

} else if (averageDolphins === averageKoalas && averageKoalas > 100 && averageDolphins > 100) {
  console.log('This is a tie!')
} else if (averageKoalas > averageDolphins && averageKoalas > 100) {
  console.log('Koalas are the winners')
} else {
  console.log('no one wins :(')
}


//Case 2 
dolphins = [97, 112, 101];
koalas = [109, 95, 123];

averageDolphins = dolphins.reduce(function (a, b) { return a + b }, 0) / dolphins.length;
console.log('average of Dolphins' + averageDolphins);

averageKoalas = koalas.reduce(function (a, b) { return a + b }, 0) / koalas.length;
console.log('average of Koalas' + averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins > 100) {
  console.log('Dolphins are the winners');

} else if (averageDolphins === averageKoalas && averageKoalas > 100 && averageDolphins > 100) {
  console.log('This is a tie!')
} else if (averageKoalas > averageDolphins && averageKoalas > 100) {
  console.log('Koalas are the winners')
} else {
  console.log('no one wins :(')
}


//case 3 
dolphins = [97, 212, 101];
koalas = [97, 212, 101];
averageDolphins = dolphins.reduce(function (a, b) { return a + b }, 0) / dolphins.length;
console.log('average of Dolphins' + averageDolphins);

averageKoalas = koalas.reduce(function (a, b) { return a + b }, 0) / koalas.length;
console.log('average of Koalas' + averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins > 100) {
  console.log('Dolphins are the winners');

} else if (averageDolphins === averageKoalas && averageKoalas > 100 && averageDolphins > 100) {
  console.log('This is a tie!')
} else if (averageKoalas > averageDolphins && averageKoalas > 100) {
  console.log('Koalas are the winners')
} else {
  console.log('no one wins :(')
}

