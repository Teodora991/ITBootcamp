"use strict";

{
  const M = 101; // M mora biti neparan broj
  let pattern = "";
  for (let i = Math.floor(M / 2); i >= -Math.floor(M / 2); i--) {
    let absValue = i < 0 ? -i : i; // ili Math.abs(i)
    pattern +=
      " ".repeat(absValue) +
      "*".repeat(M - absValue * 2) +
      " ".repeat(absValue) +
      "\n";
  }
  console.log(pattern);
}
