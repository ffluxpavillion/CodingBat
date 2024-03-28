// Array-2 -- withoutTen

// Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array.

// Examples

// withoutTen([1, 10, 10, 2]) → 1,2,0,0
// withoutTen([10, 2, 10]) → 2,0,0
// withoutTen([1, 99, 10]) → 1,99,0

function withoutTen(nums){
  const newArr = nums.filter(n => n !== 10);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 10) {
      newArr.push(0);
    }
  }

  return newArr;
}