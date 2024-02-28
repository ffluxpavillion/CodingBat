// String-2 -- doubleChar

// Given a string, return a string where for every char in the original, there are two chars.

// Examples

// doubleChar('The') → TThhee
// doubleChar('AAbb') → AAAAbbbb
// doubleChar('Hi-There') → HHii--TThheerree

function doubleChar(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result
}