import { validate } from "@babel/types";
import assert from "assert";

// import { arrayExpression } from "@babel/types";

//GENERAL BASE CONVERSION

/** 
 * MAIN FUNCTION
 * @description: Given a number in base a, convert it to base b. Return array of digits.
 * @argument numberArray: a number to convert, represented as an array of digits.
 * @argument baseA: original base.
 * @argument baseB: new base.
*/
export const convert = (numberArray, baseA, baseB) => {
  validateBase(baseA, 'input');
  validateBase(baseB, 'output');
  validateInput(numberArray, baseA);

  if (numberArray.join('') === '0') return [0];
  const decimalArray = toDecimal(numberArray, baseA);
  const output = changeBase(decimalArray, baseB);
  return output;
};

/** 
 * ARGUMENT VALIDATION
*/
function validateInput(numberArray, baseA) {
  let error = new Error('Input has wrong format');
  if (!Array.isArray(numberArray)) throw error; //not arrays, undefined, NaN, null.....
  if (!numberArray.length) throw error; //[] empty
  if (numberArray.length > 1 && numberArray[0] === 0) throw error; //[0,1] leading zero}
  if (numberArray.some(n => n < 0)) throw error; //negative digit
  if (numberArray.some(n => n >= baseA)) throw error;   //invalid positive digit
}

function validateBase(base, type) {
  let error = new Error(`Wrong ${type} base`);
  if (!base) throw error; //base missing
  if (base <= 1) throw error; //1,0,negative
  if (base % 1 > 0) throw error; //not an integer
}

/** 
 * AUXILLIARY FUNCTIONS
*/
function toDecimal(numberArray, oldBase) {
  if (oldBase === 10) return numberArray;
  let output = numberArray.reverse();
  output = output.reduce((sum, current, index) => {
    sum += current * Math.pow(oldBase, index);
    return sum;
  }, 0);
  return toDigitArray(output);
}

function changeBase(decimalArray, newBase) {
  if (newBase === 10) return decimalArray;

  //create containers: |base^0|base^1|base^2|...| // let bins = [1, newBase]; // let i = 2
  let decimal = +decimalArray.join('');
  let bins = [];
  for (let i = 0, bin = 0; bin < decimal; i++) {
    bin = Math.pow(newBase, i);
    bins = [...bins, bin];      // bins.push(bin);
  }

  //fill containers: |decimal-binValue|how many times?|
  bins = bins.reverse();
  let output = [];
  bins.reduce((leftover, bin) => {
    output.push(Math.trunc(leftover / bin)); //see how many can fit in the bin
    leftover = decimal % bin;   //check the leftover against the rest
    return leftover;
  }, decimal);

  return removeLeadingZeros(output);
}

function removeLeadingZeros(array) {
  let i = 0;
  while (array[i] === 0) i++;
  return array.slice(i);
}

function toDigitArray(number) {
  return Array.from(number.toString()).map(Number);
}

/*
Goal: convert to a neutral base (10), and then to base b.
------------------------
BASE 10 TO ANOTHER BASE
------------------------
example: 328 to base 4
1) make our columns until we reach a number larger than our value
2) divy our value up into those number containers, largest to smallest.
4^5   1024    0
4^4   256     1     (328-256 = 72 leftover)
4^3   64      1     (72-64 = 8 leftover)
4^2   16      0     16 cannot go into 8.
4^1   4       2     (8-(4*2) = 0, done!)
4^0   1       0
Answer: 11020 base 4.

  //change of base formula: logb(x) = loga(x) / loga(b) or logb(x) = log(x)/log(b)
  //let result = Math.log(+n) / Math.log(baseB);
*/
