function extractEvenNumbers(array) {
  let evenNumbers = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
      evenNumbers.add(element);
    }
  }
  return evenNumbers;
}

console.log(extractEvenNumbers([])); // []
console.log(extractEvenNumbers([1])); // []
console.log(extractEvenNumbers([1, 4, 3])); // [4]
console.log(extractEvenNumbers([2, 2, 7, 11, 18])); // [2, 2, 18]
console.log(extractEvenNumbers([6])); // [6]
console.log(extractEvenNumbers([7,9,11,23])); // []
console.log(extractEvenNumbers([28,])); // []