// AP-1 -- copyEvens

// Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. The original array will contain at least "count" even numbers.

// Examples

// copyEvens([3, 2, 4, 5, 8], 2) → 2,4
// copyEvens([3, 2, 4, 5, 8], 3) → 2,4,8
// copyEvens([6, 1, 2, 4, 5, 8], 3) → 6,2,4

function copyEvens(nums, count) {
  let result = [];
  for (let num of nums) {
    if (num % 2 === 0) {
      result.push(num);
      if (result.length === count) {
        break;
      }
    }
  }
  return result;
}