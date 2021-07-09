const calcTip = (bill) => {

  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.20;
  }
  return tip;

}

bill = [125, 555, 44];
billTips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
total = [bill[0] + billTips[0], bill[1] + billTips[1], bill[2] + billTips[2]];
console.log(bill);
console.log(billTips);
console.log(total);
