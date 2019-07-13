
export class QueenAttack {
    constructor(positions = { white: [0, 3], black: [7, 3] }) {
        if (positions.white.join('') === positions.black.join('')) throw new Error('Queens cannot share the same space');
        this._white = positions.white;
        this._black = positions.black;
    }

    get white() { return this._white; }
    get black() { return this._black; }

    canAttack() {
        let white = this._white;
        let black = this._black;
        // check lateral -- if [x,y]
        if (white[0] === black[0]) return true;
        // check vertical
        if (white[1] === black[1]) return true;
        // check diagonals
        let deltaY = white[0] - black[0];
        let deltaX = white[1] - black[1];
        let slope = deltaY / deltaX;
        if (Math.abs(slope) === 1) return true;

        return false;
    }

    toString() {
        //generate 8x8 board with queen positions
        let board = [];
        for (let i = 0; i < 8; i++) {
            let row = ['_', '_', '_', '_', '_', '_', '_', '_'];
            if (i === this._white[0]) row[this._white[1]] = 'W';
            if (i === this._black[0]) row[this._black[1]] = 'B';
            board.push(row.join(' ') + '\n');
        }
        return board.join('');
    }
};


