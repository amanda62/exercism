/*
Given a year, report if it is a leap year.
The tricky thing here is that a leap year in the Gregorian calendar occurs:

on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400

    For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

    row then col
|       |  /4   | /100    | /400  | 
|   /4  |  FF   |  TF     |       |
|  /100 |     |       |   TF    |
|  /400 |     |       |   TT    |
    */

//base function
//takes a denominator the first time it is set 
//takes the number when it's already-set version is called
const isDivisibleBy = denominator => number => !(number%denominator);

//alternative divisibility functions which use a base function
const isDivisibleBy4 = isDivisibleBy(4);
const isDivisibleBy100 = isDivisibleBy(100);
const isDivisibleBy400 = isDivisibleBy(400);

//LEAP YEAR
export const isLeap = (year) => {
  if (isDivisibleBy400(year)) return true;
  if (isDivisibleBy100(year)) return false;
  if (isDivisibleBy4(year)) return true;
  else return false;
};

//console.log(isLeap(2001));

/*simpler syntax
const isDivisibleBy4 = number => !(number%4);
const isDivisibleBy100 = number => !(number%100);
const isDivisibleBy400 = number => !(number%400);

const isDivisibleBy = (denominator) => {
  return function checkDivision(number) {
    return !(number%denominator);
  }
}

const isDivisibleByBASIC = (numerator, denominator) => !(numerator%denominator);
*/




