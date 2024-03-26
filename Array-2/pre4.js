// Array-2 -- pre4

// Given a non-empty array of ints, return a new array containing the elements from the original array that come before the first 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

// Examples

// pre4([1, 2, 4, 1]) → 1,2
// pre4([3, 1, 4]) → 3,1
// pre4([1, 4, 4]) → 1

function pre4(nums){
  const index = nums.indexOf(4);
  const newArr = nums.slice(0, index);

  return newArr;
}