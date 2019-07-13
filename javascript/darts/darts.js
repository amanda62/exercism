/* DARTS
the target rewards with 4 different amounts of points, 
depending on where the dart lands:
                                               outside target: 0 points
                   1 0 1                       outer circle: 1 point, radius 10

           5 - - - 1 0 1 - - - 5               middle circle: 5 points, radius 5

10 - - - - 5 - - - 1 0 1 - - - 5 - - - - 10    inner circle: 10 points, radius 1

           5 - - - 1 0 1 - - - 5               

                   1 0 1                       

*/

//given a point in the target (defined by its real cartesian coordinates x and y),
//returns the correct amount earned by a dart landing in that point.
export const solve = (x, y) => {
  let r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  if (r <= 1) return 10;
  if (r <= 5) return 5;
  if (r <= 10) return 1;
  return 0;
};
