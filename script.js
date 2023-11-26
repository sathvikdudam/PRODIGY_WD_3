document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const message = document.getElementById("message");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Function to check for a winner
    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }
        return false;
    };

    // Function to check for a tie
    const checkTie = () => !gameBoard.includes("");

    // Function to handle cell click
    const handleCellClick = (index) => {
        if (gameBoard[index] === "" && !checkWinner() && !checkTie()) {
            gameBoard[index] = currentPlayer;
            renderBoard();
            if (checkWinner()) {
                message.innerText = `Player ${currentPlayer} wins!`;
            } else if (checkTie()) {
                message.innerText = "It's a tie!";
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                message.innerText = `Player ${currentPlayer}'s turn`;
            }
        }
    };

    // Function to render the game board
    const renderBoard = () => {
        board.innerHTML = "";
        gameBoard.forEach((value, index) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = value;
            cell.addEventListener("click", () => handleCellClick(index));
            board.appendChild(cell);
        });
    };

    // Initialize the game board
    renderBoard();
});
