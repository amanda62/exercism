
export const reverseString = string => {
  let array = string.split('');

  return array.reduce((reversedString,char) => {
    reversedString = char + reversedString;
    return reversedString;
  },'')
};

//  not like this: return (array.map(char => array.push(array.shift()))).join('');

/* simpler syntax:
let array = string.split('');
  let reversedArray = [];

  array.forEach(function(char) {
    reversedArray.unshift(char);
  });

  return reversedArray.join('');
*/