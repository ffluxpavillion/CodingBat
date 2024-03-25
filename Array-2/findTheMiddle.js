// Array-2 -- findTheMiddle

// Write a method that returns the middle most value of an array.  You do not need to sort the array. The input array will never be empty. If the array is odd in length, the value is in the centre of the array. If the array is even, the value should be the average of the two middle values.  Hint: It's like calculating the median value, except you don't need to sort the array.

// Examples

// findTheMiddle([4,9,9,2,1,5]) → 5.5
// findTheMiddle([1, 5, 3, 1 , 5]) → 3
// findTheMiddle([10, 12, 15]) → 12

function findTheMiddle(nums){
  const middleIndex = Math.floor(nums.length / 2);

  if (nums.length % 2 !== 0) {
    return nums[middleIndex];
  } else {
    return (nums[middleIndex - 1] + nums[middleIndex]) / 2;
  }
}