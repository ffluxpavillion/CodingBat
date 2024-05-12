// 2dArray -- notFive

// Given a 2D array (might not be rectangular), return the sum of all the numbers that are not 5s.

// Examples

// notFive([[1],[2,8],[4,5,6]]) → 21
// notFive([[1,5,6],[5,5,9],[5,5,7]]) → 23
// notFive([[1],[2],[3],[4],[1]]) → 11

function notFive(someArray) {
  let sum = 0;
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      if (someArray[i][j] !== 5) {
        sum += someArray[i][j];
      }
    }
  }
  return sum;
}