// Array-3 -- countClumps

// Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.

// Examples

// countClumps([1, 2, 2, 3, 4, 4]) → 2
// countClumps([1, 1, 2, 1, 1]) → 2
// countClumps([1, 1, 1, 1, 1]) → 1

function countClumps(nums){
  let count = 0;
  let isClump = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && !isClump) {
      isClump = true;
      count++;
    } else if (nums[i] !== nums[i + 1]) {
      isClump = false;
    }
  }
  return count;
}