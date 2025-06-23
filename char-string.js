// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function stringChar(text) {
  const alphaBet = {};
  let newString = "";
  for (let i = 97; i <= 122; i++) {
    alphaBet[String.fromCharCode(i)] = i - 96;
  }
  for (const letter of text.toLowerCase()) {
    if (alphaBet[letter]) {
      newString += alphaBet[letter] + " ";
    }
  }
  return newString.trim();
}
console.log(stringChar("The sunset sets at twelve o' clock."));
