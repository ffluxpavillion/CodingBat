// String-2 -- xyzMiddle

// Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

// Examples

// xyzMiddle('AAxyzBB') → true
// xyzMiddle('AxyzBB') → true
// xyzMiddle('AxyzBBB') → false

function xyzMiddle(str) {
  const length = str.length;

  if (length < 3) {
      return false;
  }

  const mid = length / 2;

  if (length % 2 === 0) {
      return (str.substring(mid - 2, mid + 1) === 'xyz' || str.substring(mid - 1, mid + 2) === 'xyz');
  } else {
      return (str.substring(mid - 1, mid + 2) === 'xyz');
  }
}