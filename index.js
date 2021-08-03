const TicTacToe = require('./src/tic-tac-toe.js');

window.game = new TicTacToe();// обьявляем метод game и присваивает ему TicTacToe 

resetBtn.addEventListener('click', () => { // кнопка перезагрузки новой игры
    window.game = new TicTacToe();
    render();
});

function render() {
    let html = '';

    for (let i = 0; i < 3; i++) {
        html += '<div class="row">';

        for (let j = 0; j < 3; j++) {
            html += `<div class="column">${game.getFieldValue(i, j) || ''}</div>`;//метод возвращает размеры матрицы
        }

        html += '</div>';
    }

    gameCanvas.innerHTML = html;
}

render();

gameCanvas.addEventListener('click', e => {
    if (!e.target.classList.contains('column')) {//?? на каджый div в блоке gameCanvas повесили прослушку что бы понимать на какой блок ты нажали мышкой
        return ;
    }
    const rowIndex = Array.from(gameCanvas.children).indexOf(e.target.parentNode);//получили индекс по ряду ,куда мы нажали 
    const colIndex = Array.from(e.target.parentNode.children).indexOf(e.target);//получили индекс по столбцу ,куда мы нажали 

    game.nextTurn(rowIndex, colIndex);  // метод класса tic-tac

    const winner = game.getWinner(); // метод класса tic-tac который возвращает символ победителя ( x или o) или null, если победителя еще нет
    const isDraw = game.isDraw(); // метод класса tic-tac должен вернуть истину, если ходов больше нет и нет победителя

    render();

    if (winner) {
        setTimeout(() => {
            alert(`${winner} won!`);
            window.game = new TicTacToe();
            render();
        }, 10)
    }

    if (isDraw) {
        setTimeout(() => {
            alert(`It's a draw`);
            window.game = new TicTacToe();
            render();
        }, 10);
    }
})
