function fizzBuzz(n) {
  // ans list
  let answer = [];

  let divisibleBy3 = false;
  let divisibleBy5 = false;

  for (let num = 1; num <= n; num++) {
    divisibleBy3 =  (num % 3 == 0);
    // No estaba asignado si no igualado.
    divisibleBy5 = (num % 5 == 0);

    if (divisibleBy3 && divisibleBy5) {
      // Divides by both 3 and 5, add FizzBuzz
      answer.push("FizzBuzz");
    } else if (divisibleBy3) {
      // Divides by 3, add Fizz
      answer.push("Fizz");
    } else if (divisibleBy5) {
      // Divides by 5, add Buzz
      answer.push("Buzz");
    } else {
      // Not divisible by 3 or 5, add the number
      answer.push(num.toString());
    }
  }

  return answer;
}

console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]