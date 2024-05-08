// 2dArray -- count2d

// Given a 2D array (might not be rectangular), count how many numbers are in the 2D array. Return the result as an integer.

// Examples

// count2d([[1],[2,3],[4,5,6]]) → 6
// count2d([[1,5,6],[5,5,9],[5,5,7]]) → 9
// count2d([[1],[2],[3],[4]]) → 4

function count2d(someArray) {
  let count = 0;
  for (let i = 0; i < someArray.length; i++) {
    count += someArray[i].length;
  }
  return count;
}