// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
  // Special cases:
  // when x < 0, x is not a palindrome.
  // Also if the last digit of the number is 0, in order to be a palindrome,
  // the first digit of the number also needs to be 0.
  // Only 0 satisfy this property.
  if(x < 0 || (x % 10 == 0 && x != 0)) {
      return false;
  }

  let revertedNumber = 0;
  while(x > revertedNumber) {
      revertedNumber = revertedNumber * 10 + x % 10;
      x = Math.floor(x / 10);
  }

  // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
  // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
  // since the middle digit doesn't matter in palindrome(it will always equal to itself), we can simply get rid of it.

  // ! La variable reverted no estaba definida.
  return x == revertedNumber || x == Math.floor(revertedNumber/10);
}

console.log("is 121 palindrome: " + isPalindrome(121));
console.log("is -121 palindrome: " + isPalindrome(-121));
// ! El es string no era el adecuado

console.log("is 10 palindrome: " + isPalindrome(10));
console.log("is 101 palindrome: " + isPalindrome(101));
console.log("is 484 palindrome: " + isPalindrome(484));
