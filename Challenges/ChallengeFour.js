//case 1 
let bill = 6;
let tip = 0;

bill <= 300 && bill >= 50 ? tip = bill * 0.2 : tip = bill * 0.15;
let total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${total}`);

//case 2 
bill = 55;
tip = 0;
bill <= 300 && bill >= 50 ? tip = bill * 0.2 : tip = bill * 0.15;
total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${total}`);

//case 3
bill = 500;
tip = 0;
bill <= 300 && bill >= 50 ? tip = bill * 0.2 : tip = bill * 0.15;
total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${total}`);
