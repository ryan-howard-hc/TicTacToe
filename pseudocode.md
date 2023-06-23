# Tic Tac Toe
## Rules of the game
The board is a 3x3 square. 2 players alternate by putting an X or an O on each square. If they get three in a row, they win. If the board fills without 3 in a row. The game is a stalemate. This keeps going until one person wins.

## Requirements
MoSCoW - Must, Should, Could, Wont

1. Must - A board to play on                                                CHECK
         - Two alternating tags for X and O                                 CHECK KIND OF
         - A button that can reset the board                                CHECK
         - TILE cant be clicked after clicked once                          CHECK
         - RESTART GAME BUTTON/NEW GAME BUTTON                              CHECK
         - WINNER ALERT                                                     CHECK
         - GAME CONTINUES UNTIL WIN OR LOSS OR STALEMATE                    CHECK
         - ONLY ONE HTML DIV                                                CHECK
2. Should - A way to track wins/losses/stalemates                           
3. Could - Utilize Classes instead of functional code to build the game     MOSTLY CHECK
          - A bar where players enter their ID/Name                         
          - Rules link in a popup/dialog box(modal)
          - AI CAPABILITIES
          - Turn project into connect four as alternative

# BEGIN
1. Atoms - X's O's icons
      - The Board
2. Molecules - Button that resets the game
          - Alerts that display (X or O)Win or Stalemate
          - Scorebox that tracks them
          - Actually displaying player choice on the board
          - Alert that the square is full if it is.
3. Organism - The objects/functions create the setting of the game
         - All the functions when someone scores/stalemates

# INIT - VARIABLES 
1. Grid/Matrix
    - boardTicTacToe
        - 3x3 matrix or table
        - Probably a button that alternates between x and o
2. Players
    - playerOne
    - playerTwo
        - VARIABLES to keep track of players moves and scores
3. Keeping track of outcomes and status
    - winner
    - staleMate
    - checkForWin
    - ticTacToeStatus
    - boardIsFull
4. Posting outcomes and status
    - tallyTrack (Maybe if needed), should be covered by FUNCTION tallyScore()

# RENDER - FUNCTIONS
1. FUNCTION createBOARD(){     
    - Creating a rough draft matrix/array of how I am going to place the X's and O's
    CONST boardTicTacToe =[
        ['' , '' , ''],
        ['' , '' , ''],
        ['' , '' , '']
    ]; 
    - variable create 3x3 matrix/array (MAYBE???)

    - another draft maybe that would make it easy to replace each????
        [
        [[''] , [''] , ['']],
        [[''] , [''] , ['']],
        [[''] , [''] , ['']]
        ]

    RETURN boardTicTacToe;
}

OR                                          
2. const xO =                             
- Creating a table with buttons that have two options
- OR create a single function button on each cell that alternates between X and O
document.createElement("button");      
btn.innerHTML = "X/O";
document.body.appendChild(xO);
- <table> element where inputs are placed. Maybe buttons .addEventListeners for triggers?

3. FUNCTION playGame(){ -Overarching function for how the game functions(similar to the weather app)
    const playerOne -Global variables for the players
    const playerTwo 
    const staleMate -Global variable for a stalemate
    const winner -Global variable to keep track of the winner
- WILL CONTAIN 2 IN THEORY

4. FUNCTION ticTacToeStatus(){    
            RETURN checkForWin()
        }
- WILL check whether three in a row is achieved or stalemate(THE PART I NEED TO FIGURE OUT)
- WILL LIKELY use a 1-9 reference for each matrix cell

        (4a) FUNCTION checkForWin(){         
            IF (threeInRow) = (window.alert("${winner} WINS!!!!")): 
                {resetBoard;tallyScore};

            IF (boardIsFull) = (window.alert("STALEMATE! RESETTING BOARD...")): 
                {resetBoard;tallyScore};
        }
- RESPONSE for a win or stalement
- WILL use alert

        (4b) FUNCTION tallyScore(winner) {       
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
- WILL have a scorecard tracker
- WILL add through incrementing
- WILL use 
        (4c)FUNCTION resetBoard() {   
            RETURN createBoard();
        }
- Reset button or autoreset
}


# END



