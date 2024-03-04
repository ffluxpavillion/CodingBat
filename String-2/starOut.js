// String-2 -- starOut

// Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

// Examples

// starOut('ab*cd') → ad
// starOut('ab**cd') → ad
// starOut('sm*eilly') → silly

function starOut(str){
  let newString = '';

  for (let i = 0; i < str.length; i++){
    if (str.charAt(i) !== '*' && str.charAt(i - 1) !== '*' && str.charAt(i + 1) !== '*'){
      newString += str.charAt(i);
    }
  }
  return newString;
}