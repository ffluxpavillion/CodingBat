// AP-1 -- wordsWithoutList

// Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length are omitted. See wordsWithout() below which is more difficult because it uses arrays.

// Examples

// wordsWithoutList(['a', 'bb', 'b', 'ccc'], 1) → bb,ccc
// wordsWithoutList(['a', 'bb', 'b', 'ccc'], 3) → a,bb,b
// wordsWithoutList(['a', 'bb', 'b', 'ccc'], 4) → a,bb,b,ccc

function wordsWithoutList(words, len){
  let arrayList = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length !== len) {
      arrayList.push(words[i]);
    }
  }
  return arrayList;
}

// ALT SOLUTION
// function wordsWithoutList(words, len) {
//   return words.filter(word => word.length !== len);
// }
