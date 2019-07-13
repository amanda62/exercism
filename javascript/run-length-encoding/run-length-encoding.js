import { stringLiteral } from '@babel/types';

//  RUN-LENGTH ENCODING & DECODING    (ex. AAB --> 2AB --> AAB)

const removeOnes = element => element != 1;

//[A,A,B]  -> [[A,2],[B]]
const translate = array => {
  let output = [];
  let count = 1;

  array.forEach((letter, index) => {
    let next = array[index + 1];
    if (letter === next) count++;
    else {
      output.push([count, letter].filter(removeOnes));
      count = 1;
    }
  });
  return output;
};

export const encode = importString => {
  let array = importString.split(''); //       'AAB'   -> [A,A,B]
  array = translate(array); //                         -> [[2,A],[1,B]] -> remove ones
  array = array.map(subArray => subArray.join('')); // -> [2A,B]  make subArrays strings
  return array.join(''); //                            -> '2AB' make array a string
};

//------------------------------------------------------

const isANumber = char => char >= 1 && char <= 9;
//const isANumber = char => !isNaN(char);

//  '2AB' -> [2,A,B]  -> 'AAB'
export const decode = encodedString => {
  let array = encodedString.split('');
  let output = '';
  let substring = '';
  let count = '';

  //if a number, place into count. if a letter, repeat count times.
  array.forEach(character => {
    if (isANumber(character)) count += character;
    else {
      if (count === '') count = '1';
      substring = character.repeat(count);
      output += substring;
      count = '';
    }
  });
  return output;
};
