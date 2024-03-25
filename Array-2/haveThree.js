// Array-2 -- haveThree

// Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

// Examples

// haveThree([3, 1, 3, 1, 3]) → true
// haveThree([3, 1, 3, 3]) → false
// haveThree([3, 4, 3, 3, 4]) → false

function haveThree(nums){
  const threesCount = nums.filter((num) => num === 3).length;

  let adjacentThrees = false;
  nums.forEach((num, i) => {
    if (num === 3 && nums[i + 1] === 3) {
      adjacentThrees = true;
    }
  });

  return (threesCount === 3  && !adjacentThrees)
}