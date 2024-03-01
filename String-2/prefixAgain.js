// String-2 -- prefixAgain

// Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

// Examples

// prefixAgain('abXYabc', 1) → true
// prefixAgain('abXYabc', 2) → true
// prefixAgain('abXYabc', 3) → false

function prefixAgain(str, n){
  for (let i = n; i < str.length; i++){
    if (str.substring(i, i + n) === str.substring(0, n)){
      return true;
    }
  }
  return false;
}

// ALT SOLUTION --MORE CONCISE
// function prefixAgain(str, n) {
//   let prefix = str.substring(0, n);
//   return str.substring(n).includes(prefix);
// }