// Logic-1 -- shareDigit

// Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

// Examples

// shareDigit(12, 23) → true
// shareDigit(12, 43) → false
// shareDigit(12, 44) → false

function shareDigit(a, b){
  const aLeft = Math.floor(a / 10);
  const aRight = a % 10;
  const bLeft = Math.floor(b / 10);
  const bRight = b % 10;

  return aLeft === bLeft || aLeft === bRight || aRight === bLeft || aRight === bRight;
}