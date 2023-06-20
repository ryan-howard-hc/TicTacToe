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

Organism - The objects/functions that make the game and make it work properly
         - All the functions when someone scores/stalemates
<br>

# INIT

1. FUNCTION createBOARD():
    const board - variable create 3x3 matrix 

OR ticTacToeBoard.createElement
    -<table> element where inputs are placed

2. FUNCTION playGame(){
    var playerOne = 'X'
    var playerTwo = 'O'
FUNCTION checkForWin():
    const threeInRow = window.alert("${} WINS!!!!")


    IF boardIsFull(window.alert("STALEMATE! RESETTING BOARD...")): {resetBoard};
}



