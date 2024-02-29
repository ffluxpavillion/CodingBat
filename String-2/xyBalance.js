// String-2 -- xyBalance

// We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

// Examples

// xyBalance('aaxbby') → true
// xyBalance('aaxbb') → false
// xyBalance('yaaxbb') → false

function xyBalance(str){
  let lastIndexX = -1;
  let lastIndexY = -1;

  for (let i = 0; i < str.length; i++){
    if (str.charAt(i) === 'x'){
      lastIndexX = i;
    } else if (str.charAt(i) === 'y'){
      lastIndexY = i;
    }
  }

  return lastIndexY >= lastIndexX;
}