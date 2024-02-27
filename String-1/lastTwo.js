// String-1 -- lastTwo

// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

// Examples

// lastTwo('coding') → codign
// lastTwo('cat') → cta
// lastTwo('ab') → ba

function lastTwo(str){
  return str.substring(0, str.length - 2) + str.charAt(str.length - 1) + str.charAt(str.length - 2);
}