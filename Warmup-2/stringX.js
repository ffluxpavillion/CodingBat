// Warmup-2 -- stringX

// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

// Examples

// stringX('xxHxix') → xHix
// stringX('abxxxcd') → abcd
// stringX('xabxxxcdx') → xabcdx

function stringX(str) {
  if ((str.length === 2) && (str[0] === 'x' && str[1] === 'x')) return str;
  if ((str.length === 1) && (str[1] === 'x')) return str;
  let middle = str.substring(1, str.length - 1).replace(/x/g, '');

  return str.charAt(0) + middle + str.charAt(str.length - 1);
}