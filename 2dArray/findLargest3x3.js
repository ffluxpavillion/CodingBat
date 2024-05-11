// 2dArray -- findLargest3x3

// Given a 3x3 2D array, return the largest number that appears in the array. All numbers will be positive.

// Examples

// findLargest3x3([[1,5,6],[5,5,9],[5,5,7]]) → 9
// findLargest3x3([[1,1,2],[2,1,3],[1,1,1]]) → 3
// findLargest3x3([[1,8,2],[2,1,7],[7,2,3]]) → 8

function findLargest3x3(someArray) {
  let largestNum = 0;
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      if (someArray[i][j] > largestNum) {
        largestNum = someArray[i][j];
      }
    }
  }
  return largestNum;
}