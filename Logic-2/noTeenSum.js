// Logic-2 -- noTeenSum

// Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Create a helper function fixTeen(n) that takes an integer n and returns the adjusted value according to the "teen" rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().

// Examples

// noTeenSum(1, 2, 3) → 6
// noTeenSum(2, 13, 1) → 3
// noTeenSum(2, 1, 14) → 3

function noTeenSum(a, b, c){
  a = fixTeen(a);
  b = fixTeen(b);
  c = fixTeen(c);

  return a + b + c;
}

function fixTeen(n){
  if (n >= 15 && n <= 16) {
    return n;
  } else if (n >= 13 && n <= 19) {
    return 0;
  } else {
    return n;
  }
}