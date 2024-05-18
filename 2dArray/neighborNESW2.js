// 2dArray -- neighborNESW2

// Given a 2D array, consider a 0 an empty area, and a 1 a location with a person in it. Count how many elements have at least one live neighbor on their NESW sides. In other words, for each element, determine if there is a neighbor on any of the north, east, south or west sides. Add up the number of elements that have at least one neighbor. Return the result as an integer. Hint: it might help to draw out the sample runs as grids to make sure you understand the question.

// Examples

// neighborNESW2([[0,0],[1,0],[0,0]]) → 3
// neighborNESW2([[0,0,0],[0,1,0],[0,0,0]]) → 4
// neighborNESW2([[1,0,0],[0,1,0],[1,0,1]]) → 4

function neighborNESW2(someArray) {
  let count = 0;

  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      if ((i > 0 && someArray[i - 1][j] === 1) ||      // North
          (j < someArray[i].length - 1 && someArray[i][j + 1] === 1) ||      // East
          (i < someArray.length - 1 && someArray[i + 1][j] === 1) ||      // South
          (j > 0 && someArray[i][j - 1] === 1)) {      // West
        count++;
      }
    }
  }
  return count;
}