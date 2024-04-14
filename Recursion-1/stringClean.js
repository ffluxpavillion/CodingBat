// Recursion-1 -- stringClean

// Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".

// Examples

// stringClean('yyzzza') → yza
// stringClean('abbbcdd') → abcd
// stringClean('Hello') → Helo

function stringClean(str){
  if (str.length < 2) {
    return str;
  } else if (str.charAt(0) !== str.charAt(1)) {
    return str.charAt(0) + stringClean(str.substring(1));
  } else {
    return stringClean(str.substring(1));
  }
}