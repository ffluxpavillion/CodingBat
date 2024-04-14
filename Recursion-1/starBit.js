// Recursion-1 -- starBit

// This question is modified from parenBit on CodingBat to starBit. Given a string that contains a dash and a star, compute recursively a new string made of only of the dash and star and their contents, so "xyz-abc*123" yields "-abc*".

// Examples

// starBit('xyz,-abc*123') → -abc*
// starBit('x,-hello*') → -hello*
// starBit(',-xy*1') → -xy*

function starBit(str){
  return str.substring(str.indexOf('-'), str.indexOf('*') + 1);
}