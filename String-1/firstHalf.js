// String-1 -- firstHalf

// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

// Examples

// firstHalf('WooHoo') → Woo
// firstHalf('HelloThere') → Hello
// firstHalf('abcdefgh') → abcd

function firstHalf(str){
  let halfIndex = (str.length / 2);

  return str.substring(0, halfIndex);
}