document.getElementById('buttonResetBoard').addEventListener('click', function () {
    // Reset the board
    resetBoard();
});
document.getElementById('buttonClearScore').addEventListener('click', function () {
    // Clear the scoreboard
    clearScoreboard();
});

var currentPlayerSymbol = 'X';
var playerOne = 'X';
var playerTwo = 'O';
let playerOneWin = 0;
let playerTwoWin = 0;
let stalemateWin = 0;


function resetBoard() {
    var cells = document.querySelectorAll("td button");
    cells.forEach(function (cell) {
        cell.textContent = "";
        cell.setAttribute("data-selected", "false");
    });
    currentPlayerSymbol = 'X';
    document.getElementById("characterInput").value = "TURN X";
}

function clearScoreboard() {
    playerOneWin = 0;
    playerTwoWin = 0;
    stalemateWin = 0;
    updateScore();
}

function attachTableToButton() {
    document.getElementById("app").appendChild(createBOARD());
}

const button = document.getElementById("chooseTile");

document.getElementById("characterInput").value = "TURN X";

function currentPlayer() {
    currentPlayerSymbol = (currentPlayerSymbol === 'X') ? 'O' : 'X';
    document.getElementById("characterInput").value = `TURN ${currentPlayerSymbol}`;
}

function updateScore() {
    var score = document.getElementById("scoreText");
    score.textContent = `Player X Wins ${playerOneWin}| Player O Wins ${playerTwoWin}| Stalemates ${stalemateWin}`;
}

function createBOARD() {
    var board = document.createElement("table");
    board.classList.add("table", "table-bordered");

    var rows = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ];

    rows.forEach(function (row) {
        var tableRow = document.createElement("tr");

        row.forEach(function (value) {
            var cell = document.createElement("td");
            cell.classList.add("d-table-cell", "p-5", "bd-highlight");

            var button = document.createElement("button");
            button.classList.add("btn", "btn-primary", "choose-tile");
            button.textContent = "";
            button.setAttribute("data-selected", "false");
            button.addEventListener("click", function () {
                if (button.getAttribute("data-selected") === "false") {
                    button.textContent = currentPlayerSymbol;
                    button.setAttribute("data-selected", "true");

                    if (checkForWin(currentPlayerSymbol)) {
                        // if (currentPlayerSymbol === 'X') {
                        //     playerOneWin++;
                        //     alert("Player X VICTORY! SUCK IT PLAYER O!");
                        // } else {
                        //     playerTwoWin++;
                        //     alert("Player O VICTORY! SUCK IT PLAYER X!")
                        // }
                    } else if (checkStalemate()) {
                        stalemateWin++;
                    }

                    currentPlayer();
                }
            });

            cell.appendChild(button);
            cell.insertAdjacentHTML("beforeend", `<span class="btn-text">${value}</span>`);
            tableRow.appendChild(cell);
        });
        board.appendChild(tableRow);
    });
    return board;
}
attachTableToButton();
updateScore();

var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkForWin(player) {
    var cells = document.querySelectorAll("td button");

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (cells[a].textContent === player && cells[b].textContent === player && cells[c].textContent === player) {
            if (player === 'X') {
                playerOneWin++;
                alert("Player X VICTORY! SUCK IT PLAYER O!");
            } else {
                playerTwoWin++;
                alert("Player O VICTORY! SUCK IT PLAYER X!")
            }
            updateScore();
            return true;
        }
    }
    return false;
}

function checkStalemate() {
    var cells = document.querySelectorAll("td button");
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            return false;
        }
    }
    updateScore();
    return true;
}

