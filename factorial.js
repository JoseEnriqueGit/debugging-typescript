
/**
  factorial:
    - n! = n * (n-1)! 
  base case: 
    - 1! = 1
  constraints:
    - n >= 1
  example:
    - 3! = 3 * 2!
      - 2! = 2 * 1!
        - 1! = 1
        so 3! = 3 * 2 * 1 = 6
 */
function factorial(n) {
  let result = 1;
  let currentNumber = n;
  while(currentNumber === 1) {
    result = result * currentNumber;
  }
  return result;
}

console.log(factorial(1));
// console.log(factorial(4));
console.log(factorial(5));
// console.log(factorial(10));
