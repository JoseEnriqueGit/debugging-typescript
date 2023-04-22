/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

    Input: s = "()"
    Output: true
    Example 2:

Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

Example 3:
    Input: s = "(]"
    Output: false

Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
*/
// approach: push close brackets when open brackets are found,
// check for last open bracket (expected close bracket for it) ony when current bracket is a close bracket != {, [, (
function isValid(s) {
	// Initialize stack to store the closing brackets expected...
	let stack = [];
	// Traverse each character in input string...
	for (let idx = 0; idx < s.length; idx++) {
		// If open parentheses are present, push it to stack...
		if (s[idx] === "{") {
			stack.push("}");
		} else if (s[idx] === "[") {
			stack.push("]");
		} else if (s[idx] === "(") {
			stack.push(")");
		} else if (s[idx] === ")" || s[idx] === "]" || s[idx] === "}") {
			if (stack.length === 0 || stack.pop() !== s[idx]) {
				return false;
			}
		}
	}
	// if there is anything in the stack (length != 0) we are missing a closing bracket, and the string (s) is not valid
	return stack.length === 0;
}

console.log("() " + isValid("()")); // true
console.log(") " + isValid(")")); // false
console.log(" " + isValid("")); // true
console.log("()[]{} " + isValid("()[]{}")); // true
console.log("()[} " + isValid("()[}")); // false

// issue: it always returns false
