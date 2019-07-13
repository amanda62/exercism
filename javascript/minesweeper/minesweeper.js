/*Minesweeper
The user has to find the mines using numeric hints that indicate how many mines are 
directly adjacent (horizontally, vertically, diagonally) to a square.

Add the numbers to a minesweeper board.

In this exercise you have to create some code that counts the number of
mines adjacent to a square and transforms boards like this (where `*`
indicates a mine):
    +-----+
    | * * |
    |  *  |
    |  *  |
    |     |
    +-----+
into this:
    +-----+
    |1*3*1|
    |13*31|
    | 2*2 |
    | 111 |
    +-----+
    */

//takes in an array of strings, where each string represents a row
//for each string, a ' ' represents nothing, '*' represents a mine
//replace each ' ' with a number representing how many mines are directly adjacent

//validate all strings are the same length
/*gameBoard.forEach(string => {
     if (rowLength != string.split('').length)
         throw new Error('input board bad');
 });
 */

//array of strings
//for each string, turn into an array
//for each index, if ' ', replace with count
//check prev, current, next index of topString
//check prev and next index of centerString
//check prev, current, next index of bottomString
//where there is '*' increment count
//requires managing a 2D array -- nested map functions?
//problem: hard to access prev and next rows

//alternative. take length of first string. (i.e. 5)
//join array of single chars
// example: checking index 7.
//check 7-1, 7+1              :: 6,8
//check 7-(5-1), 7-5, 7-(5+1) :: 1,2,3
//      7+1(-5)       7-1(-5)
//check 7+(5-1), 7+5, 7+(5+1) :: 11,12,13
//      7-1(+5)       7+1(+5)
/*
[ 0][ 1][ 2][ 3][ 4]
[ 5][ 6][ 7][ 8][ 9]
[10][11][12][13][14]
*/
export const annotate = gameBoard => {
    if (gameBoard.length === 0) return [];
    if (gameBoard[0] === '') return [''];
    let rows = gameBoard.length;
    let cols = gameBoard[0].split('').length;
    let annotBoard = gameBoard.join('').split('');   //array of strings -> array of chars

    //this is ideal for index = cols+1 && end-index
    // edge cases should be fine because undefined != '*' ??
    //if index is multiple of (cols)%5 = 0 don't check previous
    //or (cols-1) don't check next


    let indx = 0;
    let count = 0;
    let prev = indx - 1;
    let next = indx + 1;









    annotBoard = annotBoard.map((square, indx) => {
        if (square != ' ') return square;

        let count = 0;
        let prev = indx - 1;
        let next = indx + 1;

        //   identify square type


        //  run corresponding tests


    });


    /*annotBoard = annotBoard.map((square, indx) => {
        if (square === ' ') {
            let count = 0;
            let prev = indx - 1;
            let next = indx + 1;

            //check row above
            if (annotBoard[prev - cols] === '*') count++;
            if (annotBoard[indx - cols] === '*') count++;
            if (annotBoard[next - cols] === '*') count++;
            //check row below
            if (annotBoard[prev + cols] === '*') count++;
            if (annotBoard[indx + cols] === '*') count++;
            if (annotBoard[next + cols] === '*') count++;

            //assuming rowlength > 1
            if (indx % cols === 0) if (annotBoard[next] === '*') count++; //left edge of board, don't check previous
            else if (next % cols === 0) if (annotBoard[prev] === '*') count++; //right edge of board, don't check next
            else {   //check current row on both sides
                if (annotBoard[prev] === '*') count++;
                if (annotBoard[next] === '*') count++;
            }

            if (count > 0) return count;
        }
        return square;
    });*/

    return delimitStringArray(annotBoard, cols);
};


//['a','b','c','d'] --> 'abcd' -> ['ab','cd'] for length 2
function delimitStringArray(singles, length) {
    let singleString = singles.join('');
    let start = 0;
    let stop = length;
    let output = [];
    while (start < singles.length) {
        output.push(singleString.substring(start, stop));
        start += length;
        stop += length;
    }
    return output;
}