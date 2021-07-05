import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        if (this.player == Player.WHITE) {
            return new Array(new Square(currentSquare.row+1, currentSquare.col));
        }
        else {
            return new Array(new Square(currentSquare.row-1, currentSquare.col));
        }
    }
}
