# Tic Tac Toe
## Rules of the game
The board is a 3x3 square. 2 players alternate by putting an X or an O on each square. If they get three in a row, they win. If the board fills without 3 in a row. The game is a stalemate. This keeps going until one person wins.

## Requirements
MoSCoW - Must, Should, Could, Wont

    Must - A board to play on
         - Two alternating tags for X and O
         - A button that can reset the board
    Should - A way to track wins/losses/stalemates   
    Could - Utilize Classes instead of functional code to build the game
          - A bar where players enter their ID/Name
          - Rules link in a popup/dialog box(modal)
          - AI CAPABILITIES
          - Turn project into connect four as alternative
<br>

# BEGIN

Atoms - X's O's icons
      - The Board
Molecules - Button that resets the game
          - Alerts that display (X or O)Win or Stalemate
          - Scorebox that tracks them
          - Actually displaying player choice on the board
          - Alert that the square is full if it is.
Organism - The objects/functions create the setting of the game
         - All the functions when someone scores/stalemates
<br>

# INIT

`FUNCTION createBOARD(){                     //Creating a rough draft matrix/array of how I am going to place the X's and O's
    CONST boardTicTacToe =[
        ['' , '' , ''],
        ['' , '' , ''],
        ['' , '' , '']
    ]; - variable create 3x3 matrix/array (MAYBE???)

        another draft maybe that would make it easy to replace each????
        [
        [[''] , [''] , ['']],
        [[''] , [''] , ['']],
        [[''] , [''] , ['']]
        ]

    RETURN boardTicTacToe;
}
OR                                          //Creating a table with buttons that have two options
const xO =                                  //OR create a single function button on each cell that alternates between X and O
document.createElement("button");
btn.innerHTML = "X/O";
document.body.appendChild(xO);

<table> element where inputs are placed. Maybe buttons .addEventListeners for triggers?`

**WHICH WOULD BE EASIER??????????**


# RENDER

`FUNCTION playGame(){                        //Overarching function for how the game functions
    var playerOne = 'X'                     //Create the global variables for the players
    var playerTwo = 'O'
    var staleMate = 'Stalemate'
    var winner = 

        FUNCTION ticTacToeStatus(){        //How it checks whether three in a row is achieved or stalemate(THE PART I NEED TO FIGURE OUT)
            IF  

            RETURN checkForWin()
        }

        FUNCTION checkForWin(){            //Response for a win or stalement
            IF (threeInRow) = (window.alert("${winner} WINS!!!!")): 
                {resetBoard;tallyScore};

            IF (boardIsFull) = (window.alert("STALEMATE! RESETTING BOARD...")): 
                {resetBoard;tallyScore};
        }   

        FUNCTION tallyScore(winner) {       //Scorecard tracker
            LET playerOneWin = 0;
            LET playerTwoWin = 0;
            LET stalemateWin = 0;
            IF (winner === "playerOne") {
                playerOneWin++;
            }
            ELSE IF (winner === "playerTwo"){
                playerTwoWin++;
            }
            ELSE IF (winner === "staleMate"){
                stalemateWin++;
            }
        }

        FUNCTION resetBoard() {             //Reset button or autoreset
            RETURN createBoard();
        }
}`


# END
