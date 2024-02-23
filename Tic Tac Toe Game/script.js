document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');
    const victorySound = new Audio('mix-win.wav'); // Replace with the path to your victory sound file
    const tieSound = new Audio('mix-tie.wav'); // Replace with the path to your tie sound file

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        return gameBoard.includes('') ? null : 'T'; // Tie
    }

    function handleCellClick(index) {
        if (!gameActive || gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;

        const resultValue = checkWinner();
        if (resultValue) {
            gameActive = false;
            if (resultValue === 'T') {
                result.textContent = "It's a tie!";
                playTieSound(); // Play tie sound
            } else {
                result.textContent = `${resultValue} wins!`;
                playVictorySound(); // Play victory sound
            }
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function playVictorySound() {
        victorySound.play();
    }

    function playTieSound() {
        tieSound.play();
    }

    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        result.textContent = '';
        cells.forEach(cell => {
            cell.textContent = '';
        });
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));
    });

    resetBtn.addEventListener('click', resetGame);
});
