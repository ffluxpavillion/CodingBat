// String-2 -- zipZap

// Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

// Examples

// zipZap('zipXzap') → zpXzp
// zipZap('zopzop') → zpzp
// zipZap('zzzopzop') → zzzpzp

function zipZap(str){
  let newString = '';

  for (let i = 0; i < str.length; i++){
    if (str.charAt(i) === 'z' && str.charAt(i + 2) === 'p'){
      newString += 'zp';
      i += 2;
    }
    else {
      newString += str.charAt(i);
    }
  }
  return newString;
}