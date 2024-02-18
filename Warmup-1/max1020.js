// Warmup-1 -- max1020

// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// Examples

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

function max1020(a, b){
  a = (a >= 10 && a <= 20 ? a : 0)
  b = (b >= 10 && b <= 20 ? b : 0)

  return Math.max(a,b)
}