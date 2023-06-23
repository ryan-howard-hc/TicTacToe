document.getElementById('buttonReset').addEventListener('click', function() {
  location.reload();
});


var playerOne = 'X';                  //Create the global variables for the players
var playerTwo = 'O';
var staleMate = 'Stalemate';
// var winner =;
let playerOneWin = 0;   //score starts at zero
let playerTwoWin = 0;
let stalemateWin = 0;
// var threeInRow =;



function attachTableToButton() {
    document.getElementById("app").appendChild(createBOARD()); //took the app div and appended the createBOARD function to it
  }                                                            //which is what makes the tictactoe board and resets the table
//   function attachTableToButton() {                       
//     var appTable = createBOARD();                        
//     var appDiv = document.getElementById("app");         //<<<<< much more convoluted way of doing this from weather app project
//     appDiv.appendChild(appTable);                        
//   }

const button = document.getElementById("chooseTile"); 
let onOff = false;

function currentPlayer() {
  var characterInput = document.getElementById("characterInput");
  if (characterInput.value === "TURN X") {
    characterInput.value = "TURN O";
  } else {
    characterInput.value = "TURN X";
  }
}

function createBOARD() {
  var board = document.createElement("table");
  board.classList.add("table", "table-bordered");
    
  var rows = [
        ['1', '2', '3'],   //nested arrays allow me to control them all without having to have row variables for each
        ['4', '5', '6'],
        ['7', '8', '9']
      ];
    
      document.getElementById("characterInput").value = "TURN X";

  rows.forEach(function(row) {
        var tableRow = document.createElement("tr");    

    function changeXCell(cell, content) {
      cell.textContent = content;
    } 

    function changeOCell(cell,content) { //the content is tied only to the content within the function? so why isnt it working?
      cell.textContent =content;
    }

    row.forEach(function(value) {
          var cell = document.createElement("td");      //got rid of the .maps that extrapolate to each string literal
          cell.classList.add("d-table-cell", "p-5", "bd-highlight");   
    
          var buttonX = document.createElement("button");
          buttonX.classList.add("btn", "btn-primary", "choose-tile");
          buttonX.textContent = "X";
          buttonX.setAttribute("data-selected", "true");
          buttonX.addEventListener("click", function() {
            changeXCell(cell, buttonX.textContent);
            if (checkForWin(playerOne)) {
              playerOneWin++;
              alert("Player X VICTORY! SUCK IT PLAYER O!");
            } else if (checkStalemate()) {
              stalemateWin++;
            }
              currentPlayer();
            
          });

          var buttonO = document.createElement("button");
          buttonO.classList.add("btn", "btn-primary", "choose-tile");
          buttonO.textContent = "O";
          buttonO.setAttribute("data-selected", "true");
          buttonO.addEventListener("click", function() {
            changeOCell(cell, buttonO.textContent);
            if (checkForWin(playerTwo)) {
              playerTwoWin++;
              alert("Player O VICTORY! SUCK IT PLAYER X!")
            } else if (checkStalemate()) {
              stalemateWin++;
            }
            currentPlayer();   // for some reason the added else was making the currentPlayer function not work?
          });

          cell.appendChild(buttonX);
          cell.appendChild(buttonO);
          cell.insertAdjacentHTML("beforeend", `<span class="btn-text">${value}</span>`);
          tableRow.appendChild(cell);  //beforeend => Just inside the element, after its last child.
        });
    
        board.appendChild(tableRow);
      });

    
  return board;
}

attachTableToButton();


var winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6] 
];

function checkForWin(player){
  var cells =document.querySelectorAll("td");

  for (var i = 0; i < winningCombinations.length; i++) {
    var [a,b,c] = winningCombinations[i];
    if (
      cells[a].textContent === player && 
      cells[b].textContent === player &&
      cells[c].textContent ===player
    ) {
    return true;
  }
  }
  return false;
}

function checkStalemate() {
  var cells =document.querySelectorAll("td");
  for (var i = 0; i <cells.length; i++) {
    if (cells[i].textContent === "") {        //if an empty cell is found, game isnt over
      return false;
    }
  }
  return true;
}
// function playGame(){                        //Overarching function for how the game functions
//         function ticTacToeStatus(){        //How it checks whether three in a row is achieved or stalemate(THE PART I NEED TO FIGURE OUT)
//             if 
//             return checkForWin()
//         }

//         function checkForWin(){            //Response for a win or stalement
//             IF (threeInRow) = (window.alert("`${winner}` WINS!!!!")): 
//                 {resetBoard;tallyScore};

//             IF (boardIsFull) = (window.alert("STALEMATE! RESETTING BOARD...")): 
//                 {resetBoard;tallyScore};
//         }   

//         function tallyScore(winner) {       //Scorecard tracker
//             if (winner === "playerOne") {
//                 playerOneWin++;
//             }
//             else if (winner === "playerTwo"){
//                 playerTwoWin++;
//             }
//             else if (winner === "staleMate"){
//                 stalemateWin++;
//             }
//         }

//         function resetBoard() {             //Reset button or autoreset

//             return createBoard();
//         }
// }