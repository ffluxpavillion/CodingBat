// Recursion-1 -- countAbc

// Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

// Examples

// countAbc('abc') → 1
// countAbc('abcxxabc') → 2
// countAbc('abaxxaba') → 2

function countAbc(str){
  if (str.length < 3) {
    return 0;
  } else if (str.charAt(0) === 'a' && str.charAt(1) === 'b' && str.charAt(2) === 'c' ) {
    return 1 + countAbc(str.substring(2));
  } else if (str.charAt(0) === 'a' && str.charAt(1) === 'b' && str.charAt(2) === 'a' ) {
    return 1 + countAbc(str.substring(2));
  } else {
    return countAbc(str.substring(1));
  }
}