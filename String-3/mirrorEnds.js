// String-3 -- mirrorEnds

// Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

// Examples

// mirrorEnds('abXYZba') → ab
// mirrorEnds('abca') → a
// mirrorEnds('aba') → aba

function mirrorEnds(string) {
  let mirrorString = '';

  for (let i = 0; i < string.length; i++){
    if (string[i] === string[string.length - 1 - i]){
      mirrorString += string[i];
    } else {
      break;
    }
  }
  return mirrorString;
}