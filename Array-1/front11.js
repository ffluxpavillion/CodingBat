// Array-1 -- front11

// Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

// Examples

// front11([1, 2, 3], [7, 9, 8]) → 1,7
// front11([1], [2]) → 1,2
// front11([1, 7], []) → 1

function front11(a, b){
  const newArr = [];

  if (a.length > 0) {
    newArr.push(a[0]);
  }

  if (b.length > 0) {
    newArr.push(b[0]);
  }

  return newArr;
}