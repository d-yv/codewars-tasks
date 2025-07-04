// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  const arrStr = str.toLowerCase().split("");
  let result = true;
  arrStr.forEach((letter) => {
    if (arrStr.filter((element) => element === letter).length > 1) {
      result = false;
      return;
    }
  });
  return result;
}

console.log(isIsogram("Dermatoglyphics"), "true");
console.log(isIsogram("aba"), "false");
console.log(isIsogram("moOse"), "false");
