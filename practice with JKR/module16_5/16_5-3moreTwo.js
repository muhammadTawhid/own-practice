function sum(num1, num2, num3) {
  var math = num1 + num2 + num3;
  return math;
}

// var result = sum(1, 2, 3);
// console.log(result);

function sum(nums) {
  var math = nums[0] + nums[1] + nums[2];
  return math;
}

// var result = sum([1, 2, 3]);
// console.log(result);

function sum(nums) {
  var sum = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum = sum + nums[i];
    }
  }
  return sum;
}

var result = sum([1, 2, 3, 5, 3, 6]);
console.log(result);
