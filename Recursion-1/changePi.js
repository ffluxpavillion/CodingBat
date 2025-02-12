// Recursion-1 -- changePi

// Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

// Examples

// changePi('xpix') → x3.14x
// changePi('pipi') → 3.143.14
// changePi('pip') → 3.14p

function changePi(str){
  if (str.length <= 1) {
    return str;
  } else if (str.substring(0, 2) === 'pi') {
    return '3.14' + changePi(str.substring(2));
  } else {
    return str.charAt(0) + changePi(str.substring(1));
  }
}