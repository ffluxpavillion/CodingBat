// String-1 -- deFront

// Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

// Examples

// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay

function deFront(str){
  let firstChar = str.charAt(0) === 'a' ? 'a' : '';
  let secondChar = str.charAt(1) === 'b' ? 'b' : '';
  let endChars = str.substring(2);

  return firstChar + secondChar + endChars;
}