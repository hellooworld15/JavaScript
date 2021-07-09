//Coding Challenge 3 

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  }
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 98,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  }
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`);
}

else if (john.calcBMI > mark.calcBMI()) {
  console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})`);
}

else {
  console.log('Mark and John have the same BMI!!');
}
