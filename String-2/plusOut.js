// String-2 -- plusOut

// Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

// Examples

// plusOut('12xy34', 'xy') → ++xy++
// plusOut('12xy34', '1') → 1+++++
// plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy

function plusOut(str, word){
  let newString = '';
  let i = 0;

  while (i < str.length){
    if (str.substring(i, i + word.length) === word){
      newString += word;
      i += word.length;
    } else {
      newString += '+';
      i++;
    }
  }
  return newString;
}