// Check to see if a string has the same amount
// of 'x's and 'o's.The method must return a boolean
// and be case insensitive.The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const str = "oOoxxx";

function XO(str) {
  const arr = str.toLowerCase().split("");
  let o = 0;
  let x = 0;
  for (amount of arr) {
    if (amount === "o") {
      o++;
    }
    if (amount === "x") {
      x++;
    }
  }
  return o === x;
}
console.log(XO(str));
