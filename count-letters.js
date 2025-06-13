const word = "aavvuu";

function getCount(str) {
  let count = 0;
  const arr = ["a", "e", "i", "o", "u"];
  for (const elStr of str) {
    if (arr.includes(elStr)) {
      count++;
    }
  }
  return count;
}
console.log(getCount(word));
