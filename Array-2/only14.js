// Array-2 -- only14

// Given an array of ints, return true if every element is a 1 or a 4.

// Examples

// only14([1, 4, 1, 4]) → true
// only14([1, 4, 2, 4]) → false
// only14([1, 1]) → true

function only14(nums){
  let count1 = 0;
  let count4 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count1++;
    }

    if (nums[i] === 4) {
      count4++;
    }
  }

  return count1 + count4 === nums.length;
}

// ALT SOLUTION --MORE CONCISE
// function only14(nums){
//   return nums.every(num => num === 1 || num === 4);
// }