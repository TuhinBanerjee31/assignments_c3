/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function setMap(temp, str) {
  str.map((ch) => {
    if (temp.get(ch) === undefined) {
      temp.set(ch, 1);
    } else {
      temp.set(ch, temp.get(ch) + 1);
    }
  });
}

function isAnagram(str1, str2) {
  let temp1 = new Map();
  let temp2 = new Map();

  setMap(temp1, str1.toLowerCase().split(""));
  setMap(temp2, str2.toLowerCase().split(""));

  if (temp1.size != temp2.size) return false;

  for (let [key, value] of temp1) {
    if (temp2.get(key) != value) return false;
  }

  return true;
}

// console.log(isAnagram('hello', 'ollhe '))

module.exports = isAnagram;
