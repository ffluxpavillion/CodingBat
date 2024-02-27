// String-1 -- middleThree

// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

// Examples

// middleThree('Candy') → and
// middleThree('and') → and
// middleThree('solving') → lvi

function middleThree(str){
  let middleIndex = (str.length - 1) / 2;
  let startIndex = middleIndex - 1;

  return str.substring(startIndex, startIndex + 3);
}