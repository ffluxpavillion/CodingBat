// String-1 -- withoutEnd2

// Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

// Examples

// withoutEnd2('Hello') → ell
// withoutEnd2('abc') → b
// withoutEnd2('ab') →

function withoutEnd2(str){
  let middle = str.substring(1, str.length - 1);

  if (str.length > 2){
    return middle;
  } else {
    return '';
  }
}