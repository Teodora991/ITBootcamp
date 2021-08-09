"use strict";

function getLongestPalindrom(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j > i; j--) {
      let slice = str.slice(i, j);
      if (
        slice.length > longest.length &&
        slice === slice.split("").reverse().join("")
      ) {
        longest = slice;
        break;
      }
    }
  }
  return longest;
}
