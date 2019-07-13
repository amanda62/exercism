import { stringLiteral } from '@babel/types';

/*
const checkConsecutiveNumbers = (array, i) => {
  let ouput = array[i];

  if (isANumber(array[i])) {
    output += array[i];
    checkConsecutiveNumbers(array[i++]);
  }
  return output;

  //checks for Consecutive Numbers starting at index given where there is a starting number. 
  //Returns a single string ex. 'A' or '1' or '12' etc.

};


checkConsecutiveNumbers(array)

  array.forEach((letter, index) => {
    let ouput = [];
    let next = array[index + 1];
    let subArray = [];

    if ((isANumber(next)) {
      output.push(subArray);
      subArray = [next];
    } else output.push(letter); //if just one letter, push 'letter' onto ouput array
  });
  return output;
*/

/*
  [2] [1] [A] [B] [3]
  count = '';
Is [A] a number? no. if count = '' set count = 1.
Is [2] a number? yes. set count = '2'
Is [1] a number? yes. set count = '2' + '1' = '21'
Is [A] a number? no. substring = 'AA' output += substring. set count = '1'
Is [B] a number? no. substring = 'B'  output += substring. set count = '1'
*/

/*
Implement run-length encoding and decoding.

Run-length encoding (RLE) is a simple form of data compression, where runs 
(consecutive data elements) are replaced by just one data value and count.

For example we can represent the original 53 characters with only 13.

"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
RLE allows the original data to be perfectly reconstructed from the 
compressed data, which makes it a lossless data compression.

"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
For simplicity, you can assume that the unencoded string will only 
contain the letters A through Z (either lower or upper case) and whitespace. 
This way data to be encoded will never contain any numbers and numbers 
inside data to be decoded always represent the count for the following character.
*/

//for each index, compare to the previous, if the same, add count to previous array [num, char]. if not, create new subarray.
//[[num, char], [num, char]...]
//[{num:char}, {num:char}...]

// [A][A][B]
// [2,A][B]
// or [A,A][B]
// or [2,A][1,B]

// count = 0;
// previousLetter = ['']
// check is 'A' === ['']
//  no. returns previousLetter with [A]

// count = 0;
// previousLetter = [A]
// check is 'A' === [A]
//  yes. modifies previousLetter to [1,A]. and increment count.

// count = 1;
// previousLetter = [1,A]
// check is 'A' === [1,A]
//  yes. modifies previousLetter to [2,A]. and increment count.

// count = 1;
// previousLetter = [1,A]
// check is 'B' === [1,A]
// no. returns newSubArray with [B]. resets count to 0. pushes old subArray onto mainArray

function aMatch(acc, next, count) {
  //when count=0    compare acc [A]   with next 'A'
  //when count>0    compare acc [1,A] with next 'A'
  if (count === 0) return acc[0] === next;
  return acc[1] === next;
}

function modifyPreviousLetter(modifiedCount, letterArray) {
  //case [A]    when count=1  -> [modifiedCount,letterArray]
  //case [1,A]  when count>1  -> increment array[0]
  if (modifiedCount === 1) return [modifiedCount, letterArray];
  return [letterArray[0] + 1, letterArray[1]];
}

function reverseArrayofTwoElements(array) {}

export const encode = initialString => {
  //replace runs with one data value and count #X
  let array = initialString.split(''); //eachLetter => //split when next letter !=); //call()?
  const output = [];
  let count = 0;
  let initial = [];

  array.forEach(letter => {
    // if a match, modify intial
    if (aMatch(initial, letter, count)) {
      return modifyPreviousLetter(count++, initial);
    }
    //if not a match, push initial onto output, reset count to 0, set initial to new letter
    output.push(initial);
    count = 0;
    initial = [letter];
    return initial;
  });
  return output;
};

export const decode = encodedString => {
  //string.prototype.repeat()
};

//aucilliary variables that you mutate and reset -- this is a sign it should be a function.
//or have a funcion for the whole flow of that element.
