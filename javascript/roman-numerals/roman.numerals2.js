

/*
   let difference = Math.abs(current.value - number);
   let findMe = romans.find(roman => roman.value === difference);
   if (findMe) { //if there's a match
     outString = outString + findMe.key + current.key;
     number -= (current.value - findMe.value);
     }*/

//negative, case 48
/*if (result < 0) {
  outputString = current.key + outputString;
  number -= current.value;
      if (result < 0 && result > -1) {

} else number = Math.abs(number);
}*/

/*
export const toRoman = arabicNumeral => {
  let number = arabicNumeral;
  let difference = '';
  let outString = '';
  let count = 1;

  romans.forEach((element, i) => {
    difference = number - element.value;
    count = 1;

    if (difference >= 0) {

      count = number / element.value;
      if (count <= 3) {
        outString += element.key.repeat(number / element.value);
        number %= element.value;
      }
      //convert IIII -> IV
      //bubble to parent 5-match(i)
      // 9 VIIII -> IV
      //bubble to parent 10-match(i)
      //48 XXXX -> XL bubble to parent 50, if no match
      //93 LXXXX -> XC bubble to parent 100, 


      // bubbling loop

      /*let foundObject = romans.find(roman => roman.value === Math.abs(difference));
                if (foundObject) { //if there's a match
                  out.string = out.string + foundObject.key + current.key;
                  break;
                }

    }
  });
  return outString;
};
*/



/* //let [M,D,C,L,X,V,I] = [1000,500,100,50,10,5,1];     
4
  4-10 = -6 
  4-5= -1 --> matches I+V

//cases: -1, >0, check against all remaining values, <-1
  90-100=-10  --> match XC
  90-50=40
  40-50=-10
  40-10=30

  80-100=-20  no match
  80-50=30    L
  30-50=-20   no match
  30-10=20    LX
  20-10=10    LXX
  10-10=0     reached zero, done --> LXXX

//number/value
case: result >= 1   use currentKey.repeat!
case: result >=.8   use nextKey + current Key
case: result <.8    move on
  */




/*

number/value            number/value
4 / 5 = .8   -1  i V    -1 / 1 = -1   next      4-5=-1  this matches. use this key and done.
9 / 10 =.9   -1  i X    -1 / 5 = -.2  nextnext  9-10=-1
48 /50 =.96  -2  x L    -2 / 10 = -.2 next      48-50=-2  doesnt match. 
93/100 =.93  -7  x C    -7 / 10                 93-100=-7 doesnt match. 
93
141
*/



let romans = [
  { key: 'M', value: 1000 },
  { key: 'D', value: 500 },
  { key: 'C', value: 100 },
  { key: 'L', value: 50 },
  { key: 'X', value: 10 },
  { key: 'V', value: 5 },
  { key: 'I', value: 1 }
];

/* //let [M,D,C,L,X,V,I] = [1000,500,100,50,10,5,1];     
4
  4-10 = -6 
  4-5= -1 --> matches I+V
 
//cases: -1, >0, check against all remaining values, <-1
  90-100=-10  --> match XC
  90-50=40
  40-50=-10
  40-10=30
 
  80-100=-20  no match
  80-50=30    L
  30-50=-20   no match
  30-10=20    LX
  20-10=10    LXX
  10-10=0     reached zero, done --> LXXX
 
      //take in number, subtract descending values
  //case: difference < 0 -- check difference against all remaining values = if exact match, string+match+currentKey, done
  //  case: difference < 0 but no match -- 
  //case: > 0 -- string+key, keep going with current key and new difference
  //case: = 0 -- string+key, done.
 
 
48 - 50 = -2  -> LX ...
93-100 = -7 --> 
141 
 
41-100
41-50=-9    -> XXXX -> XL ->
  41
 
41 - 50 = -9;  
 
6 - 10 = -4;  5-4 = 1
 
4 - 5 = -1;
 
  */


export const toRoman = arabicNumerals => {
  let difference = '';
  let out = { number: arabicNumerals, string: '' };

  for (let i = 0; i < romans.length; i++) {
    let current = romans[i];
    let next = romans[i + 1];
    difference = out.number - current.value;

    if (difference < 0 && Math.abs(difference) != out.number) { //see if we're on the right key
      if (Math.abs(difference) <= next.value) {
        //out.string = out.string + next.key + current.key;
        //out.number = current.value - out.number;

        out.string = out.string + next.key + current.key;
        out.number = Math.abs(out.number - current.value);
        break;
      }

      /*let foundObject = romans.find(roman => roman.value === Math.abs(difference));
        if (foundObject) { //if there's a match
          out.string = out.string + foundObject.key + current.key;
          break;
        }*/
    }

    if (difference > 0) {
      out.string += current.key.repeat(out.number / current.value);
      out.number %= current.value;
    }

    if (difference === 0) { //last step
      out.string += current.key;
      break;
    }

  }

  return out.string;
};


const number = process.argv[2];
let test = toRoman(number);
console.log(test);