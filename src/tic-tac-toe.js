class TicTacToe {

    constructor() {
      this.table = [[null, null, null],[null, null, null],[null, null, null]];
      this.currentPlayer = 'x';
      this.turn = 0;
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.table[rowIndex][columnIndex] == null) {
        this.table[rowIndex][columnIndex] = this.currentPlayer;

        this.currentPlayer == 'x' ? this.currentPlayer = 'o' : this.currentPlayer = 'x';
        this.turn++;
      }
    }

    isFinished() {
      return this.noMoreTurns() || this.getWinner() != null;
    }

    getWinner() {
      var winner =
        (this.table[0][0] == this.table[0][1] && this.table[0][1] == this.table[0][2] && this.table[0][2] == this.table[0][0] && this.table[0][0]) ||
        (this.table[1][0] == this.table[1][1] && this.table[1][1] == this.table[1][2] && this.table[1][2] == this.table[1][0] && this.table[1][0]) ||
        (this.table[2][0] == this.table[2][1] && this.table[2][1] == this.table[2][2] && this.table[2][2] == this.table[2][0] && this.table[2][0]) ||
        // column
        (this.table[0][0] == this.table[1][0] && this.table[1][0] == this.table[2][0] && this.table[2][0] == this.table[0][0] && this.table[0][0]) ||
        (this.table[0][1] == this.table[1][1] && this.table[1][1] == this.table[2][1] && this.table[2][1] == this.table[0][1] && this.table[0][1]) ||
        (this.table[0][2] == this.table[1][2] && this.table[1][2] == this.table[2][2] && this.table[2][2] == this.table[0][2] && this.table[0][2]) ||
        // diagnol
        (this.table[0][0] == this.table[1][1] && this.table[1][1] == this.table[2][2] && this.table[2][2] == this.table[0][0] && this.table[0][0]) ||
        (this.table[2][0] == this.table[1][1] && this.table[1][1] == this.table[0][2] && this.table[0][2] == this.table[2][0] && this.table[2][0])
      if (winner) {
          return winner;
      } else {
          return null;
      }
    }

    noMoreTurns() {
      return this.turn == 9;
    }

    isDraw() {
      return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.table[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;