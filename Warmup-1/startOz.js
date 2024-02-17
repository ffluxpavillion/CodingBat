// Warmup-1 -- startOz

// Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

// Examples

// startOz('ozymandias') → oz
// startOz('bzoo') → z
// startOz('oxx') → o

function startOz(str) {
  if (str.substring(0, 2).startsWith('oz')) {
    return str.slice(0, 2);
  } else if (str.charAt(0) === 'o') {
    return str.slice(0, 1);
  } else if (str.charAt(1) === 'z') {
    return str.slice(1, 2);
  } else {
    return '';
  }
}
