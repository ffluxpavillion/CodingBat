// Recursion-1 -- allStar

// Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".

// Examples

// allStar('hello') → h*e*l*l*o
// allStar('abc') → a*b*c
// allStar('ab') → a*b

function allStar(str){
  if (str.length <= 1) {
    return str;
  } else {
    return str.charAt(0) + '*' + allStar(str.substring(1));
  }
}