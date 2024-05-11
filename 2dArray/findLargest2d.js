// 2dArray -- findLargest2d

// Given a 2D array (might not be rectangular), return the largest number that appears in the array. The 2D array will have at least one element in it, and all numbers will be positive.

// Examples

// findLargest2d([[1],[2,8],[4,5,6]]) → 8
// findLargest2d([[1,5,6],[5,5,9],[5,5,7]]) → 9
// findLargest2d([[1],[2],[3],[4],[1]]) → 4

function findLargest2d(someArray) {
  let largestNum = null;
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      if (someArray[i][j] > largestNum) {
        largestNum = someArray[i][j];
      }
    }
  }
  return largestNum;
}