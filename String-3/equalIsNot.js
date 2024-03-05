// String-3 -- equalIsNot

// Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

// Examples

// equalIsNot('This is not') → false
// equalIsNot('This is notnot') → true
// equalIsNot('noisxxnotyynotxisi') → true

function equalIsNot(str){
  let isCount = 0;
  let notCount = 0;

  for (let i = 0; i < str.length; i++){
    if (str.substring(i, i + 2) === 'is'){
      isCount++;
    }
    if (str.substring(i, i + 3) === 'not'){
      notCount++;
    }
  }

  return isCount === notCount;
}