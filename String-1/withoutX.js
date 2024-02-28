// String-1 -- withoutX

// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

// Examples

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi

function withoutX(str){
  if (str.startsWith('x')) {
    str = str.substring(1);
  }

  if (str.endsWith('x') && str.length > 0) {
    str = str.substring(0, str.length - 1);
  }

  return str;
}