// Warmup-2 -- doubleX

// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// Examples

// doubleX('axxbb') → true
// doubleX('axaxax') → false
// doubleX('xxxxx') → true

function doubleX(str) {
  for (let i = 0; i = str.length - 1; i++) {
    if (str[i] === 'x') {
      return str[i + 1] === 'x'
    }
  }
  return false;
}