// kilometerToMeter
// budgetCalculator
// hotelCost
// megaFriend

function kilometerToMeter(kilo) {
  var sum = kilo * 1000;
  if (kilo == undefined) {
    return "Please fill the gaps";
  } else if (kilo == String) {
    return "invalid input value";
  }
  return sum;
}

var result = kilometerToMeter(1);
console.log(result);

function budgetCalculator(watch, phone, laptop) {
  var sum = watch * 50 + phone * 100 + laptop * 500;
  if (watch == undefined || phone == undefined || laptop == undefined) {
    return "please fill the input value";
  } else if (watch < 0 || phone < 0 || laptop < 0) {
    return "invalid input";
  }
  return sum;
}
var result = budgetCalculator(1, 1, 1);
console.log(result);

function hotelCost(days) {
  var totalBill = 0;

  if (days == undefined) {
    return "fill the input field";
  } else if (days < 0) {
    return "invalid input";
  }

  if (days <= 10) {
    totalBill = days * 100;
  } else if (days <= 20) {
    var first10Days = 10 * 100;
    var afterDiscount = days - 10;
    var last10Days = afterDiscount * 80;
    totalBill = first10Days + last10Days;
  } else {
    var first10Days = 10 * 100;
    var second10Days = 10 * 80;
    var afterDiscount = days - 20;
    var lastFewDays = afterDiscount * 50;
    totalBill = first10Days + second10Days + lastFewDays;
  }

  return totalBill;
}

var result = hotelCost(21);
console.log(result);

function megaFriend(names) {
  if (names == Number || names == undefined) {
    return "invalid input";
  }

  var largestName = names[0];
  for (var i = 0; i < names.length; i++) {
    var element = names[i];
    if (element.length > largestName.length) {
      largestName = element;
    }
  }
  return largestName;
}

var result = megaFriend(["a", "ab", "abc", "abcd"]);
console.log(result);
