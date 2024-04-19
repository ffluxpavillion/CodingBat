// AP-1 -- scoresAverage

// Given an array of scores, compute the int average of the first half and the second half, and return whichever is larger. We'll say that the second half begins at index length/2. The array length will be at least 2. To practice decomposition, write a separate helper function average(scores, start, end) {} which computes the average of the elements between indexes start..end. Call your helper function twice to implement scoresAverage(). Write your helper function after your scoresAverage() function. Normally you would compute averages with doubles, but here we use ints so the expected results are exact.

// Examples

// scoresAverage([2, 2, 4, 4]) → 4
// scoresAverage([4, 4, 4, 2, 2, 2]) → 4
// scoresAverage([3, 4, 5, 1, 2, 3]) → 4

function scoresAverage(scores){
  let midIndex = Math.floor(scores.length / 2);
  let firstHalfAverage = average(scores, 0, midIndex);
  let secondHalfAverage = average(scores, midIndex, scores.length);
  return Math.max(firstHalfAverage, secondHalfAverage);
}

function average(scores, start, end) {
  let sum = 0;
  let count = end - start;
  for (let i = start; i < end; i++) {
    sum += scores[i];
  }
  return Math.floor(sum / count)
}