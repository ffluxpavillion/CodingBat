// Array-1 -- double23

// Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

// Examples

// double23([2, 2]) → true
// double23([3, 3]) → true
// double23([2, 3]) → false

function double23(nums){
  let count2 = 0;
  let count3 = 0;

  for (let num of nums) {
    if (num === 2) {
      count2++;
    } else if (num === 3) {
      count3++;
    }
  }

  return count2 === 2 || count3 === 2;
}

// ALT SOLUTION --MORE CONCISE
// function double23(nums){
// return nums.filter(num => num === 2).length === 2 || nums.filter(num => num === 3).length === 2;
// }