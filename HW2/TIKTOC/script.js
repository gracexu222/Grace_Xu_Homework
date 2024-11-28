const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const winnerMessage = document.getElementById('winnerMessage');
const winnerText = document.getElementById('winnerText');
const restartButton = document.getElementById('restartButton');

let currentPlayer = 'X';
let boardState = Array(9).fill(null);

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Handle cell click
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (boardState[index] !== null || winnerText.innerText !== '') return;

        // Mark cell and update state
        cell.innerText = currentPlayer;
        cell.classList.add('taken');
        boardState[index] = currentPlayer;

        // Check for a winner
        if (checkWinner(currentPlayer)) {
            winnerText.innerText = `${currentPlayer} Wins!`;
            winnerMessage.style.display = 'block';
        } else if (boardState.every(cell => cell !== null)) {
            winnerText.innerText = `It's a Draw!`;
            winnerMessage.style.display = 'block';
        }

        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});

// Restart game
restartButton.addEventListener('click', () => {
    boardState.fill(null);
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('taken');
    });
    currentPlayer = 'X';
    winnerMessage.style.display = 'none';
    winnerText.innerText = '';
});

// Check if the current player has won
function checkWinner(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => boardState[index] === player);
    });
}
