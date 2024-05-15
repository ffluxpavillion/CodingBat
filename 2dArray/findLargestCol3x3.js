// 2dArray -- findLargestCol3x3

// Given a 3x3 2D array, calculate the sum of each column, and return the largest sum.

// Examples

// findLargestCol3x3([[1,5,6],[5,5,9],[5,5,7]]) → 22
// findLargestCol3x3([[1,1,2],[2,1,3],[1,1,1]]) → 6
// findLargestCol3x3([[1,8,2],[2,1,7],[7,2,3]]) → 12

function findLargestCol3x3(someArray) {
  let colSums = [0, 0, 0];
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      colSums[j] += someArray[i][j];
    }
  }
  return Math.max(...colSums);
}