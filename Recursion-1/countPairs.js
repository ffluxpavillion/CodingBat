// Recursion-1 -- countPairs

// We'll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string.

// Examples

// countPairs('axa') → 1
// countPairs('axax') → 2
// countPairs('axbx') → 1

function countPairs(str){
  if (str.length < 3) {
    return 0;
  } else if (str.charAt(0) === str.charAt(2)) {
    return 1 + countPairs(str.substring(1));
  } else {
    return countPairs(str.substring(1));
  }
}