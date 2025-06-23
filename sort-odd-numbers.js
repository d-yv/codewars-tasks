// Task
// You will be given an array of numbers.You have to sort the odd numbers in ascending order
// while leaving the even numbers at their original positions.
function sortOddNumbers(arr) {
  const sortedArr = [];
  const oddArr = [];
  let oddIndex = 0;
  arr.forEach((num) => {
    if (num % 2 != 0) {
      oddArr.push(num);
    }
  });
  oddArr.sort((a, b) => a - b);

  arr.forEach((num) => {
    if (num % 2 != 0) {
      sortedArr.push(oddArr[oddIndex]);
      oddIndex++;
    } else {
      sortedArr.push(num);
    }
  });
  return sortedArr;
}

console.log(sortOddNumbers([1, 2, 5, 3, 4]));
