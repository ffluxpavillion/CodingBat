// Recursion-1 -- countX

// Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

// Examples

// countX('xxhixx') → 4
// countX('xhixhix') → 3
// countX('hi') → 0

function countX(str){
  if (str.length === 0) {
    return 0;
  }

  if (str.charAt(0) === 'x') {
    return 1 + countX(str.substring(1));
  } else {
    return countX(str.substring(1));
  }
}