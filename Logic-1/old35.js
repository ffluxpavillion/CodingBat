// Logic-1 -- old35

// Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

// Examples

// old35(3) → true
// old35(10) → true
// old35(15) → false

function old35(n){
  if (n % 3 === 0){
    if (n % 5 !== 0){
      return true;
    }
  }

  if (n % 5 === 0) {
    if (n % 3 !== 0){
      return true;
    }
  }

  return false;
}

// alt solution --more concise:
function old35(n){
  if (n % 3 === 0){
    return n % 5 !== 0 ? true : false;
  } else if (n % 5 === 0) {
    return n % 3 !== 0 ? true : false;
  }
  return false;
}

// alt solution --most concise:
function old35(n) {
    return (n % 3 === 0) !== (n % 5 === 0);
}