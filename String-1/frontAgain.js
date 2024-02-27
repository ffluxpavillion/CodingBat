// String-1 -- frontAgain

// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

// Examples

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str){
  let firstTwo = str.substring(0, 2);
  let lastTwo = str.substring((str.length - 2), (str.length));

  if (str.length > 2 ){
    return firstTwo === lastTwo;
  }
  else if (str.length === 2){
    return true;
  }
  else if (0 <= str.length <= 1){
    return false;
  }
}