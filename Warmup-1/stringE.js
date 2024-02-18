// Warmup-1 -- stringE

// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str){
  const countE = str.split('e').length-1;
  return countE >= 1 && countE <=3
}