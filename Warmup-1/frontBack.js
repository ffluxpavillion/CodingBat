// Warmup-1 -- frontBack

// Given a string, return a new string where the first and last chars have been exchanged.

// Examples

// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba

function frontBack(str) {
  if (str.length <= 1) {
    return str;
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  const middle = str.substring(1, str.length - 1);

  return lastChar + middle + firstChar;
}