/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

1
1 1
1 2 1
1 3 3 1
1 4 6 4 1

Examples:
-
  Input: rowIndex = 3
  Output: [1,3,3,1]
  Example 2:
-
  Input: rowIndex = 0
  Output: [1]
  Example 3:
-
  Input: rowIndex = 1
  Output: [1,1]

Constraints:
  0 <= rowIndex <= 33
 */

var generatePascalTriangle = function(numRows) {
  let currentRow = 0;
  let column = 0;
  // Create an array list to store the output result...
  let triangleAsArrayOfArrays = [];
  // For generating each row of the triangle...
  for (currentRow = 0; currentRow <= numRows; currentRow++) {
      triangleAsArrayOfArrays.push(Array(currentRow + 1));       // Initialize the first row of the pascal triangle as {1}...
      for (column = 0; column <= currentRow; column++) {

          if (column === 0 || column === currentRow) {
              triangleAsArrayOfArrays[currentRow][column] = 1;
          }
          else {
              // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
              triangleAsArrayOfArrays[currentRow][column] = 
                triangleAsArrayOfArrays[currentRow - 1][column - 1] 
                + triangleAsArrayOfArrays[currentRow - 1][column];
          }
      }
  }
  return triangleAsArrayOfArrays;      // Return the output list of pascal values...
};

// console.log(generatePascalTriangle(5));
generatePascalTriangle(4).forEach(element => {
  console.log(element);
});
// console.log(generatePascalTriangle(33)[3]);

// an array of arrays is just an array but each item on the array is an array itself.

// 0 1 2 length -1 
// [1, 2, 3]
// ['st', 'dt']
// let a = [{ name: "Brian", age: 26 }, { name: "Elian"}];
// let user = a[1];
// console.log(a[0]);
// console.log(a[0].name + " Perez");
// console.log(a[0].age);
// console.log("-------");
// console.log(user);
// console.log(user.name + " Enmanuel");
// console.log(user.age);

// let aa = [[1, 2], [3, 4], [5, 6]];
// console.log(aa);
// console.log(aa[0]);
// // let secondArray = aa[1];
// // console.log(secondArray);
// // console.log(secondArray[1]);
// console.log(aa[1]);
// console.log(aa[1][1])