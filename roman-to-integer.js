
/*
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a roman numeral, convert it to an integer.
*/
function romanToInt(roman) {
  // mapping for roman symbols and their numeric values
  let dict = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
  };
  
  let romanAsInt = 0;
  // let's iterate over roman number and convert each symbol into its numeric value to add it to the total
  for (let i = 0; i < roman.length; i++) {
    let intVal = dict[roman[i]]; // get numeric value for symbol
    let nextIntVal = 0;
      
      // when we are not calculating the last roman symbol
      // we will check the next value to subtract the value on the special cases
      //    for example 4 in roman numbers is IV and not IIII, so if the current values is I, which is equal to 1,
      //    and the next is V, which values 5, we need to do: next value - current, so IV is 5-1 = 4
      if(i != roman.length - 1) 
      {
          nextIntVal = dict[roman[i+1]];
          if(nextIntVal > intVal){
              intVal = nextIntVal - intVal;
              i = i+1;
          }
      }
      romanAsInt = romanAsInt + intVal;
  }
  return romanAsInt;
};

console.log('IV = ' + romanToInt('IV'));      // 4
console.log('IX = ' + romanToInt('IX'));      // 9
console.log('XL = ' + romanToInt('XL'));      // 40
console.log('VI = ' + romanToInt('VI'));      // 6
console.log('CD = ' + romanToInt('CD'));      // 400
console.log('XC = ' + romanToInt('XC'));      // 90
console.log('CM = ' + romanToInt('CM'));      // 900
console.log('XX = ' + romanToInt('XX'));      // 20
console.log('LIII = ' + romanToInt('LIII'));  // 53
console.log('LXIII = ' + romanToInt('LXIII'));  // 53


// issue: some conversions are off
