// Array-2 -- centeredAverage

// Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

// Examples

// centeredAverage([1, 2, 3, 4, 100]) → 3
// centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5.2
// centeredAverage([-10, -4, -2, -4, -2, 0]) → -3

function centeredAverage(nums){
  nums.sort((a, b) => (a - b));
  nums = nums.toSpliced(0, 1);
  nums = nums.toSpliced(nums.length - 1, 1);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  const centeredAvg = sum / nums.length;
  return centeredAvg;
}