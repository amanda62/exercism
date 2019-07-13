
let romans = [
  { key: 'M', value: 1000 },
  { key: 'D', value: 500 },
  { key: 'C', value: 100 },
  { key: 'L', value: 50 },
  { key: 'X', value: 10 },
  { key: 'V', value: 5 },
  { key: 'I', value: 1 },
];

function detractPlaceKeepers(num, array) {
  const objects = array.filter(element => `${element.value}`.includes('1'));
  for (let i = 0; i < objects.length; i++) {
    let current = objects[i];
    let next = objects[i + 1];
    if (num < current.value && num > next.value) {
      return { key: next.key, value: next.value };
    }
  }
}

export const toRoman = arabicNumerals => {
  let number = arabicNumerals;
  let outString = '';

  romans.forEach(current => {
    let result = number / current.value;

    //NORMAL. (ex.III) We know it will go in evenly.
    if (result >= 1) {
      outString += current.key.repeat(result);
      number %= current.value;
      result = number / current.value;
    }

    //BACKWARDS. (ex. IV) otherKey+currentKey
    if (result >= .8 && ((`${number}`.includes('4') || `${number}`.includes('9')))) {
      if (number === 8 && current.value === 10) { //weird cases (48, 98...)
        outString += 'VIII'
        number = 0;
      }
      else {
        let temp = detractPlaceKeepers(number, romans);
        outString += (temp.key + current.key);
        number -= (current.value - temp.value);
      }
    }
  });
  return outString;
};

const number = process.argv[2];
let test = toRoman(number);
console.log(test);



/*
   value num result
    //use other + firstOpp
    500 - 90 = 410
    100 - 90 = 10 ===> result < (number && current.value && next.value && nextnext.value)
    50 - 90
    10 - 90

    //use secondOpp
    100 - 70 = 30   -- > result < (number && current.value && next.value)
    50 - 70 = -20   -- > result < 0

    100 - 80 = 20 -- > result < (number && current.value && next.value)

    //use other + firstOpp
    100 - 48 = 52;
    50 - 48 = 2; --> result < (number && current.value && next.value && nextnext.value)
    10 - 48
    5 - 48

    10 - 4
    5 - 4 = 1
*/