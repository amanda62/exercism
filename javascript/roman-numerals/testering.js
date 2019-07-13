let romans = [
  { key: 'M', value: 1000 },
  { key: 'D', value: 500 },
  { key: 'C', value: 100 },
  { key: 'L', value: 50 },
  { key: 'X', value: 10 },
  { key: 'V', value: 5 },
  { key: 'I', value: 1 }
];
/*
3004
1000-3004 -= 2004   M
1000-2004 -= 1004   MM
1000-1004 -= 4      MMM
[x]4 - 10 = -6      
4 - 5 = -1 OKAY    MMM V
4 - 1 = 3          MMMI
3 - 1 = 2          MMMII
2 - 1 = 1          MMMIII  
1- 1 = 0           MMMIIII
*/
const runValue = (n, value, key, previousKey) => {
  let count = 0;

  while (n - value >= 0) {
    n -= value;
    count++;
    if (count > 3) return { number: n, string: key + previousKey };
  }
  return { number: n, string: key.repeat(count) };
};

let x = runValue(4, 1, 'I', 'V');
console.log(x);





unction compareValue(minuend, subtrahend) {
  let difference = minuend - subtrahend;
  if (difference < -1) return;
  if (difference === -1) return minuend; //run negativeOneCase
  if (difference > 0) return difference; //add key to string and run again
  throw new Error('COMPARE VALUE ERROR');
}

function negativeOneCase() {

}

romans.forEach(object => {
  let result = 0;
  result = compareValue(n, romans.value);

  if(result===n) --
  if (result)
  //if nothing, move on
  //if number===return, move on and
  //if number!=return string+key, run again
});

const runValue = (n, value, key, prevKey) => {
  let count = 0;
  let negCount = 0;

  while (n - value >= -1) {
    if (n - value === -1) negCount++;
    while (n - value >= 0) {
      n -= value;
      count++;
      if (count > 3) {
        if (negCount > 1) return { number: n, string: prevKey + key };
        return { number: n, string: key + prevKey };
      }
    }
  }
  return { number: n, string: key.repeat(count) };
};

export const toRoman = arabicNumerals => {
  let num = arabicNumerals;
  let output = '';
  let result = 0;

  // given a number and an array of {key: 'x', value: '1'} objects run it against
  // if values can be subtracted from number, add that key to output string
  romans.forEach((object, index) => {
    const previousElement = romans[index - 1];
    const previousKey = previousElement && previousElement.key;
    result = runValue(num, object.value, object.key, previousKey);
    if (result.string != '') output += result.string;
    num = result.number;
  });
  return output;
};

let test = toRoman(4);
console.log(test);
//console.log(romans);

/*if n can be divided by modNum, perform and return key value
const checkModKey = (n, modNum, key) => {
  if (n % modNum != n) {
    n %= modNum;
    return [n, key];
  }
  return [n];
};

5     length=1  [3]
55    length=2  [2]
555   length=3  [1]
5555  length=4  [0]

[0][0][0][0]

const numberIntoPlaceholder = number => {
  let placeholder = [0,0,0,0];
  let numberArray = number.split('');
  let length = numberArray.length;
};

//if n can be subtracted by value, perform and return {number: , string: }
// these are combined in cases where we have to rerun on the same key value pair
//TO DO: case where 4, 40, 400, symbol is placed to the left side
//TO DO: case where count exceeds 3
const runValue = (n, value, key) => {
  let count = 0;
  //if (n === -1) n = 1;
  //if (count ===3)

  while (n-value >=-1) {
    n -= value;
    count ++;
    if (n === -1) n = 1;
  }

  if (n - value >= -1) {
    n -= value; //success! +1 numeral. keep going?
    count++;
    if (n - value >= -1) {
      return runValue(n, value, key); //success! run again.
    }
    return { number: n, string: key.repeat(count) };
  }
  return { number: n, string: '' }; //if this numeral isn't workin' for that number
};
*/
