// 2dArray -- count5in2x2
// Given a 2x2 2D array, count how many of the elements are the number 5. Return the result as an integer.

// Examples

// count5in2x2([[3,4],[5,6]]) → 1
// count5in2x2([[5,9],[5,5]]) → 3
// count5in2x2([[2,2],[3,3]]) → 0

function count5in2x2(someArray) {
  let count = 0;
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      if (someArray[i][j] === 5) {
        count++;
      }
    }
  }
  return count;
}