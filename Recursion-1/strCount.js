// Recursion-1 -- strCount

// Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.

// Examples

// strCount('catcowcat', 'cat') → 2
// strCount('catcowcat', 'cow') → 1
// strCount('catcowcat', 'dog') → 0

function strCount(str, sub){
  if (str.length < sub.length) {
    return 0;
  } else if (str.substring(0, sub.length) === sub) {
    return 1 + strCount(str.substring(sub.length), sub)
  } else {
    return strCount(str.substring(1), sub);
  }
}