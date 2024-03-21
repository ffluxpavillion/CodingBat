// Array-1 -- swapEnds

// Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

// Examples

// swapEnds([1, 2, 3, 4]) → 4,2,3,1
// swapEnds([1, 2, 3]) → 3,2,1
// swapEnds([8, 6, 7, 9, 5]) → 5,6,7,9,8

function swapEnds(nums){
  let result = [...nums];
  
  if (nums.length > 1) {
    result = [nums[nums.length - 1], nums.splice(1, nums.length - 2), nums[0]].flat();
  }

  return result;
}