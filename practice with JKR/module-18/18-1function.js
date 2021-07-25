// function evenify(num) {
//   if (num % 2 == 0) {
//     console.log(num, "is even number ");
//   } else {
//     console.log(num, "is odd number");
//   }
// }

function evenifyAll(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
      console.log(num, "is even number ");
    } else {
      console.log(num, "is odd number");
    }
  }
}

const nums = [4, 5, 3, 7, 89, 2, 4, 6];
evenifyAll(nums);

const friendsAge = [22, 44, 54, 24, 65, 77, 88];
evenifyAll(friendsAge);
