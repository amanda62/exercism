/*
The Collatz Conjecture or 3x+1 problem can be summarized as follows:

Take any positive integer n. If n is even, divide n by 2 to get n / 2. 
If n is odd, multiply n by 3 and add 1 to get 3n + 1. 
Repeat the process indefinitely. 
No matter which number you start with, you will always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.

Example:
Starting with n = 12, the steps would be as follows:
12 6 3 10 5 16 8 4 2 1
Resulting in 9 steps. So for input n = 12, the return value would be 9.
*/

const isPositiveInteger = n => !!(n>0);
const isEven = n => !(n%2);

const collatzConjecture = n => {
  if (isEven(n)) n /= 2;
  else n = (3*n +1);
  return n;
  // return isEven(n) ? n / 2 : (3*n +1);
}

export const steps = (n, counter=0) => {
  if (!isPositiveInteger(n)) throw new Error("Only positive numbers are allowed");
  
  if (n===1) return counter;
  counter++;

  n = collatzConjecture(n);
  return steps(n, counter);
};


/*
console.log(collatzConjecture(12));
console.log(collatzConjecture(6));
console.log(collatzConjecture(3));
*/
//console.log(steps(12));