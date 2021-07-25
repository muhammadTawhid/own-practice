function evenify(num) {
  if (num % 2 == 0) {
    (result = num), "is even number ";
  } else {
    (result = num), "is odd number";
  }
  return result;
}

var result = evenify(26);
var square = result * result;
console.log(square);

function evenifyAll(nums) {
  var evenArray = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    var result = evenify(num);
    evenArray.push(result);
  }
  return evenArray;
}

const nums = [4, 5, 3, 7, 89, 2, 4, 6];
var numsEven = evenifyAll(nums);
console.log(numsEven); // here i replying
