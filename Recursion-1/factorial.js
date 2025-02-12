// Recursion-1 -- factorial

// Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).

// Examples

// factorial(1) → 1
// factorial(2) → 2
// factorial(3) → 6

function factorial(n){
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}