// String-3 -- countTriple

// We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

// Examples

// countTriple('abcXXXabc') → 1
// countTriple('xxxabyyyycd') → 3
// countTriple('a') → 0

function countTriple(str){
  let tripleCount = 0;

  for (let i = 0; i < str.length - 2; i++){
    if (str.charAt(i) === str.charAt(i + 1) && str.charAt(i) === str.charAt(i + 2)){
      tripleCount++;
    }
  }
  return tripleCount;
}