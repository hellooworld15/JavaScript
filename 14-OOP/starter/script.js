'use strict';

// const Person = function (firstName, birthYear) {
//   //instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// //1. New empty object is created
// //2. function is called, this =()
// //3. () linked to prototype
// //4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// // console.log(matilda, jack);
// const jay = 'Jay';
// // console.log(jonas instanceof Person);

// //Prototypes
// // console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(jonas));
// // console.log(Person.prototype.isPrototypeOf(matilda));
// // console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species, matilda.species);

// // console.log(jonas.hasOwnProperty('species'));

// // console.log(jonas.__proto__);
// // //Object.prototype top of the prototype chain
// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__);

// // console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);
// // console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// // console.log(arr.unique());
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

////////////////////////////Coding Challenge #1
//1: Constructor : make and speed property
//2:

// const Car = function (make, speed) {
//   //instance properties
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.speedIncrease = function () {
//   this.speed += 10;
//   //   console.log(this.speed);
// };

// Car.prototype.speedDecrease = function () {
//   this.speed -= 10;
//   //   console.log(this.speed);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// car1.speedIncrease();
// car2.speedIncrease();
// car1.speedDecrease();
// car2.speedDecrease();

// //////////////////////////////////////////////////////////////
// //LEC
// //Class expression
// const PersonCl = class{}

//Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
// }

//   //methods will be added to .prototype property
//   calcAge() {
//     // console.log(2037 - this.birthYear);
//   }

//   greet() {
//     // console.log(`hey ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     // console.log('hey there');
//     // console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// // console.log(jessica);
// jessica.calcAge();
// // console.log(jessica.age);

// jessica.calcAge();
// // console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`hey ${this.firstName}`);
// // };
// jessica.greet();
// const walter = new PersonCl('Walter Whiit', 1965);
// // 1. Classes are not hoisted
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode
// //////////////////////////////////////////////////
//LEC
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// // console.log(account.latest);

// account.latest = 50;
// // console.log(account.movements);

// // PersonCl.hey = function () {
// //   console.log('hey there');
// //   console.log(this);
// // };

// PersonCl.hey();

// ///////////////////////////////
// //LEC
// const PersonProto = {
//   calcAge() {
//     // console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// // console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// // console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// //Coding Challenge #2
// class CarClassV {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   speedIncrease() {
//     this.speed += 10;
//     //   console.log(this.speed);
//   }

//   speedDecrease() {
//     this.speed -= 10;
//     //   console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarClassV('Ford', 120);
// console.log(ford.speedUS);
// ford.speedIncrease();

// const car11 = Object.create(CarClassV);
// console.log(car11);
// ford.speedIncrease();
// ford.speedIncrease();
// ford.speedDecrease();
// ford.speed = 50;
// console.log(ford);

//////////////////////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`my name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// // console.log(mike.__proto__);
// // console.log(mike.__proto__.__proto__);

// // console.log(mike instanceof Student);
// // console.log(mike instanceof Person);
// // Student.prototype.constructor = Student;
// // console.dir(Student.prototype.constructor);

// /////////////////////////////////////////////
// //Coding Challenge
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.speed = speed;
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

// EV.prototype.chargeBattery = function () {
//     console.log(2037 - this.birthYear);
// ////////////////////////////////////////////////////////////
// //static method

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     // console.log(`hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('hey there');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }  `
//     );
//   }
// }

// const martha = new StudentCl('Matha Jones ', 2012, 'Computer Science ');
// martha.introduce();
// martha.calcAge();
// ////////////////////////////////////
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//////////////////////////////////////////////////////
//Public fields
//Private fields
//Public methods
//Private methods

class Account {
  //1) Public field (instance)
  locale = navigator.language;

  //2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public interface
  //Public Methods

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // Private Methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);
console.log(acc1.getMovements());

// console.log(acc1.#approveLoan(100))
// console.log(acc1.#movements);
// console.log(acc1.#pin);
/////////////////////////////////////////////////

//chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

class EVCl extends Car {
  //1) Public field (instance)

  //2) Private fields
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
