
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

    function createBOARD() {
      var board = document.createElement("table");
      board.classList.add("table", "table-bordered");
    
      var rows = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
      ];
    
      rows.forEach(function(row) {
        var tableRow = document.createElement("tr");
    
        row.forEach(function(value) {
          var cell = document.createElement("td");
          cell.classList.add("d-table-cell", "p-5", "bd-highlight");
    
          var button = document.createElement("button");
          button.classList.add("btn", "btn-primary", "choose-tile");
          button.textContent = "Choose tile";
    
          cell.appendChild(button);
          cell.insertAdjacentHTML("beforeend", `<span class="btn-text">${value}</span>`);
          tableRow.appendChild(cell);
        });
    
        board.appendChild(tableRow);
      });
    

      board.addEventListener("click", function(event) {
        if (event.target.classList.contains("choose-tile")) {
          var button = event.target;
          var buttonText = button.textContent;
          
          if (buttonText === "Choose tile") {
            button.textContent = "X";

          } else {
            button.textContent = "O";

          }
        }
      });
    
      return board;
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