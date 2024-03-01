// String-2 -- getSandwich

// A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

// Examples

// getSandwich('breadjambread') → jam
// getSandwich('xxbreadjambreadyy') → jam
// getSandwich('xxbreadyy') →

function getSandwich(str){
  let firstBreadIndex = str.indexOf('bread');
  let lastBreadIndex = str.lastIndexOf('bread');

  if (firstBreadIndex !== -1 && lastBreadIndex !== -1 && firstBreadIndex !== lastBreadIndex){
    return str.substring(firstBreadIndex + 5, lastBreadIndex);
  }
  else {
    return '';
  }
}