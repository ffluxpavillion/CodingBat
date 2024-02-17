// Warmup-1 -- delDel

// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

// Examples

// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel

function delDel(str) {
  if (str.startsWith('del', 1)) {
    return str.replace('del', '')
  } else {
    return str
  }
}