// 2dArray -- neighborNESW

// Given a 2D array, consider a 0 an empty area, and a 1 a location with a person in it. Count how many total neighbors elements have on their NESW sides. In other words, for each element, count the number of neighbors on their north, east, south or west sides, and add all of these together. Return the result as an integer. Hint: it might help to draw out the sample runs as grids to make sure you understand the question.

// Examples

// neighborNESW([[0,0],[1,0],[0,0]]) → 3
// neighborNESW([[0,0,0],[0,1,0],[0,0,0]]) → 4
// neighborNESW([[1,0,0],[0,1,0],[0,0,0]]) → 6

function neighborNESW(someArray) {
  let count = 0;

  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      if (someArray[i][j] === 1) {
        // Check North
        if (i > 0 && someArray[i - 1][j] === 0) {
          count++;
        }
        // Check East
        if (j < someArray[i].length - 1 && someArray[i][j + 1] === 0) {
          count++;
        }
        // Check South
        if (i < someArray.length - 1 && someArray[i + 1][j] === 0) {
          count++;
        }
        // Check West
        if (j > 0 && someArray[i][j - 1] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}