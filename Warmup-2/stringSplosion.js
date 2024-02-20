// Warmup-2 -- stringSplosion

// Given a non-empty string like "Code" return a string like "CCoCodCode".

function stringSplosion(str) {
  let  = '';
  for (let i = 0; i <= str.length; i++) {
    result += str.substring(0, i);
  }
  return result
}