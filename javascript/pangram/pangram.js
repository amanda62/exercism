/*
Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma,
"every letter") is a sentence using every letter of the alphabet at least once.
The best known English pangram is:
> The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters `a` to `z`, inclusive, and is case
insensitive. Input will not contain non-ASCII symbols.
*/

let latinAlphabet = {
  a: 1;
  A: 1;
}

export const isPangram = string => {
  const latinUpp = Array(26)
    .fill()
    .map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
  const latinLow = Array(26)
    .fill()
    .map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

  let sentence = string
    .split('')
    .filter(x=> x != ' ');
    

  sentence.reduce((accumulator, char, index) => {
    if (latinUpp.contains(char) || latinLow(char) {
      //return index and remove from both arrays
    }
    return false;
  }, true);
};

//ASCII 65-90 = 97-122
