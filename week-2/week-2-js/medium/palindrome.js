/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let temp= str.toLowerCase().split('')
  for(let i=0; i<temp.length-1; i++){
    if (temp[i] != temp[temp.length-i]) return false
  }

  return true;
}

module.exports = isPalindrome;
