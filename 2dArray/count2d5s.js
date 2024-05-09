// 2dArray -- count2d5s

// Given a 2D array (might not be rectangular), count how many of the elements are the number 5. Return the result as an integer.

// Examples

// count2d5s([[1],[2,3],[4,5,6]]) → 1
// count2d5s([[1,5,6],[5,5,9],[5,5,7]]) → 5
// count2d5s([[1],[2],[3],[4]]) → 0

function count2d5s(someArray) {
  let count = 0;
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      if (someArray[i][j] === 5) {
      count ++;
      }
    }
  }
  return count;
}