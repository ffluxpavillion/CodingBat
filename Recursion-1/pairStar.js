// Recursion-1 -- pairStar

// Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

// Examples

// pairStar('hello') → hel*lo
// pairStar('xxyy') → x*xy*y
// pairStar('aaaa') → a*a*a*a

function pairStar(str){
  if (str.length <= 1) {
    return str;
  } else if (str.charAt(0) === str.charAt(1)) {
    return str.charAt(0) + '*' + pairStar(str.substring(1));
  } else {
    return str.charAt(0) + pairStar(str.substring(1));
  }
}