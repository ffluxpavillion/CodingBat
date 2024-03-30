// Array-3 -- canBalance

// Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

// Examples

// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true

function canBalance(nums){
  for (let i = 1; i < nums.length; i++) {

    let leftSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += nums[j];
    }

    let rightSum = 0;
    for (let j = i; j < nums.length; j++) {
      rightSum += nums[j];
    }

    if (leftSum === rightSum) {
      return true;
    }
  }

  return false;
}