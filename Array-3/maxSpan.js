// Array-3 -- maxSpan

// Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)

// Examples

// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

function maxSpan(nums){
  let maxSpan = 0;

    for (let i = 0; i < nums.length; i++) {
        let j = nums.lastIndexOf(nums[i]);
        let span = j - i + 1;
        maxSpan = Math.max(maxSpan, span);
    }

    return maxSpan;
}