// AP-1 -- mergeTwo
// Start with two arrays of strings, A and B, each with its elements in alphabetical order and without duplicates. Return a new array containing the first N elements from the two arrays. The result array should be in alphabetical order and without duplicates. A and B will both have a length which is N or more. The best "linear" solution makes a single pass over A and B, taking advantage of the fact that they are in alphabetical order, copying elements directly to the new array.

// Examples

// mergeTwo(['a', 'c', 'z'], ['b', 'f', 'z'], 3) → a,b,c
// mergeTwo(['a', 'c', 'z'], ['c', 'f', 'z'], 3) → a,c,f
// mergeTwo(['f', 'g', 'z'], ['c', 'f', 'g'], 3) → c,f,g

function mergeTwo(a, b, n){
  let result = [];
  let i = 0, j = 0;

  while (result.length < n) {
    let nextA = a[i], nextB = b[j];
    if (nextA < nextB) {
        if (!result.includes(nextA)) result.push(nextA);
        i++;
    } else if (nextB < nextA) {
        if (!result.includes(nextB)) result.push(nextB);
        j++;
    } else {
        if (!result.includes(nextA)) result.push(nextA);
        i++; j++;
    }
  }
  return result;
}