// String-2 -- sameStarChar

// Returns true if, for every '*' (star) in the string, the chars both immediately before and after the star are the same.

// Examples

// sameStarChar('xy*yzz') → true
// sameStarChar('xy*zzz') → false
// sameStarChar('*xa*az') → true

function sameStarChar(str) {
  for (let i = 1; i < str.length - 1; i++) {
      if (str.charAt(i) === '*') {
          if (str.charAt(i - 1) !== str.charAt(i + 1)) {
              return false;
          }
      }
  }
  return true;
}