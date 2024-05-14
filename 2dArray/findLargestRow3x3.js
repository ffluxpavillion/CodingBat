// 2dArray -- findLargestRow3x3

// Given a 3x3 2D array, calculate the sum of each row, and return the largest sum.

// Examples

// findLargestRow3x3([[1,5,6],[5,5,9],[5,5,7]]) → 19
// findLargestRow3x3([[1,1,2],[2,1,3],[1,1,1]]) → 6
// findLargestRow3x3([[1,8,2],[2,1,7],[7,2,3]]) → 12

function findLargestRow3x3(someArray) {
  let largestSum = 0;

  for (let i = 0; i < someArray.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < someArray[i].length; j++) {
      rowSum += someArray[i][j];
    }
    if (rowSum > largestSum) {
      largestSum = rowSum;
    }
  }
  return largestSum;
}