//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 /*   Black: 0
      Brown: 1
      Red: 2
      Orange: 3
      Yellow: 4
      Green: 5
      Blue: 6
      Violet: 7
      Grey: 8
      White: 9  */

export const value = (resistorColors) => {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  
  //lower level
  /*
  return Number(resistorColors.reduce((accumulator, color) => {
    accumulator += COLORS.indexOf(color);
    return accumulator;
  }, '')); 
  */


  //[acc]   [brown] [black]
  //'#'     [black]
  //'##'    [] <-- original array stays intact, not like dis

  //best method
  return Number(resistorColors.map(color => COLORS.indexOf(color)).join(''));

};
