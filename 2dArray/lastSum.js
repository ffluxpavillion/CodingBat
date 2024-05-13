// 2dArray -- lastSum

// Given a 2D array (might not be rectangular), return the sum of the last number from each row.

// Examples

// lastSum([[1],[2,8],[4,5,6]]) → 15
// lastSum([[1,5,6],[5,5,9],[5,5,7]]) → 22
// lastSum([[1],[2],[3],[4],[1]]) → 11

function lastSum(someArray) {
  let sum = 0;
  for (let i = 0; i < someArray.length; i++) {
    sum += someArray[i][someArray[i].length - 1];
  }
  return sum;
}