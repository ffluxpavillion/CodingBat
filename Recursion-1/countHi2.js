// Recursion-1 -- countHi2

// Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an 'x' immedately before them.

// Examples

// countHi2('ahixhi') → 1
// countHi2('ahibhi') → 2
// countHi2('xhixhi') → 0

function countHi2(str){
  if (str.length < 2) {
    return 0;
  } else if (str.startsWith('xhi')) {
    return countHi2(str.substring(3));
    } else if (str.startsWith('hi')) {
    return 1 + countHi2(str.substring(2));
  } else {
    return countHi2(str.substring(1));
  }
}