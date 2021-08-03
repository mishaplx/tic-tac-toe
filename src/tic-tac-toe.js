class TicTacToe {
  constructor() {
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = "x";
    
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }
//должен правильно обновить состояние класса (изменить текущего игрока, обновить хранилище меток и т. д.)
  nextTurn(rowIndex, columnIndex) {
    
    if (this.matrix[rowIndex][columnIndex] == null) {
      this.matrix[rowIndex][columnIndex] = this.currentPlayer
      this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
    }
  }


//должен возвращать истину, если игра завершена (например, есть победитель или это ничья)
  isFinished() {
    return this.isDraw() || this.getWinner() !== null ? true: false
}


  getWinner() {
    if (this.matrix[0][0] == 'x' && this.matrix[0][1] == 'x' && this.matrix[0][2] == 'x' ||
      this.matrix[1][0] == 'x' && this.matrix[1][1] == 'x' && this.matrix[1][2] == 'x' ||
      this.matrix[2][0] == 'x' && this.matrix[2][1] == 'x' && this.matrix[2][2] == 'x' ||
      
      this.matrix[0][0] == 'x' && this.matrix[1][0] == 'x' && this.matrix[2][0] == 'x' ||
      this.matrix[0][1] == 'x' && this.matrix[1][1] == 'x' && this.matrix[2][1] == 'x' ||
      this.matrix[0][2] == 'x' && this.matrix[1][2] == 'x' && this.matrix[2][2] == 'x' ||

      this.matrix[0][0] == 'x' && this.matrix[1][1] == 'x' && this.matrix[2][2] == 'x' ||
      this.matrix[2][0] == 'x' && this.matrix[1][1] == 'x' && this.matrix[0][2] == 'x'
      ) {
      return 'x'
    }
    else if (this.matrix[0][0] == 'o' && this.matrix[0][1] == 'o' && this.matrix[0][2] == 'o' ||
    this.matrix[1][0] == 'o' && this.matrix[1][1] == 'o' && this.matrix[1][2] == 'o' ||
    this.matrix[2][0] == 'o' && this.matrix[2][1] == 'o' && this.matrix[2][2] == 'o' ||
    
    this.matrix[0][0] == 'o' && this.matrix[1][0] == 'o' && this.matrix[2][0] == 'o' ||
    this.matrix[0][1] == 'o' && this.matrix[1][1] == 'o' && this.matrix[2][1] == 'o' ||
    this.matrix[0][2] == 'o' && this.matrix[1][2] == 'o' && this.matrix[2][2] == 'o' ||

    this.matrix[0][0] == 'o' && this.matrix[1][1] == 'o' && this.matrix[2][2] == 'o' ||
    this.matrix[2][0] == 'o' && this.matrix[1][1] == 'o' && this.matrix[0][2] == 'o') {
      return 'o'
    }
    return null
  }

  //должен вернуть истину, если больше нет полей для размещения x или o
  noMoreTurns() {
    return this.matrix.every((el) => !(el.includes(null)))
   }
  

//должен вернуть истину, если ходов больше нет и нет победителя
  isDraw() {
    if (this.noMoreTurns() && this.getWinner() == null) {
      return true;
  }
  return false;
  }

  getFieldValue(rowIndex, colIndex) { 
    return this.matrix[rowIndex][colIndex];
  
  }
}

module.exports = TicTacToe;
