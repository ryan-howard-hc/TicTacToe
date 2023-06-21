
var playerOne = 'X';                  //Create the global variables for the players
var playerTwo = 'O';
var staleMate = 'Stalemate';
var winner =;
let playerOneWin = 0;   //starts at zero
let playerTwoWin = 0;
let stalemateWin = 0;


var threeInRow =;

var appTable = createBOARD();
var appDiv = document.getElementById("app");
appDiv.appendChild(appTable);
// const boardTicTacToe =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]; 

function createBOARD(){
    var board = document.createElement("table");
    var rowOne = ['1','2','3'];
    var rowOneRow = document.createElement("tr");
    rowOneRow.forEach(rowOne.text);
    board.appendChild(rowOneRow);


    var rowTwo = ['4','5','6'];
    var rowTwoRow =document.createElement("tr");
    rowTwoRow.forEach(rowTwo.textContent);
    board.appendChild(rowTwoRow);
    

    var rowThree = ['7','8','9'];
    var rowThreeRow =document.createElement("tr");
    rowThreeRow.forEach(rowThree.textContent);
    board.appendChild(rowThreeRow);

    return board;
}
var button = document.getElementById("chooseTile");
button.addEventListener("click", attachTableToButton);

function playGame(){                        //Overarching function for how the game functions
        function ticTacToeStatus(){        //How it checks whether three in a row is achieved or stalemate(THE PART I NEED TO FIGURE OUT)
            if 
            return checkForWin()
        }

        function checkForWin(){            //Response for a win or stalement
            IF (threeInRow) = (window.alert("`${winner}` WINS!!!!")): 
                {resetBoard;tallyScore};

            IF (boardIsFull) = (window.alert("STALEMATE! RESETTING BOARD...")): 
                {resetBoard;tallyScore};
        }   

        function tallyScore(winner) {       //Scorecard tracker
            if (winner === "playerOne") {
                playerOneWin++;
            }
            else if (winner === "playerTwo"){
                playerTwoWin++;
            }
            else if (winner === "staleMate"){
                stalemateWin++;
            }
        }

        function resetBoard() {             //Reset button or autoreset

            return createBoard();
        }
}