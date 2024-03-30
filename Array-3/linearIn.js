// Array-3 -- linearIn

// Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order.

// Examples

// linearIn([1, 2, 4, 6], [2, 4]) → true
// linearIn([1, 2, 4, 6], [2, 3, 4]) → false
// linearIn([1, 2, 4, 4, 6], [2, 4]) → true

function linearIn(outer, inner){
  let i = 0;
  let j = 0;

  while (i < inner.length && j < outer.length) {
    if (inner[i] > outer[j]) {
      j++;
    } else if (inner[i] === outer[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  return i === inner.length;
}