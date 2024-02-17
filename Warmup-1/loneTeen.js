// Warmup-1 -- loneTeen

// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

// Examples

// loneTeen(13, 99) → true
// loneTeen(21, 19) → true
// loneTeen(13, 13) → false

function loneTeen(a, b){
  const aTeen = a >= 13 && a <= 19;
  const bTeen = b >= 13 && b <= 19;

  return aTeen !== bTeen;
}
