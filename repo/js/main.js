
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
        ['1', '2', '3'],   //nested arrays allow me to control them all without having to have row variables for each
        ['4', '5', '6'],
        ['7', '8', '9']
      ];
    


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
              buttonX.addEventListener("click",function (){
                changeXCell(cell,buttonX.textContent);              //had buttonX.content instead of buttonX.textContext! YEEHAWWWW
              });

          var buttonO = document.createElement("button");
          buttonO.classList.add("btn", "btn-primary", "choose-tile");
          buttonO.textContent = "O";
            buttonO.addEventListener("click",function (){
              changeOCell(cell, buttonO.textContent);
            }); 

          cell.appendChild(buttonX);
          cell.appendChild(buttonO);
          cell.insertAdjacentHTML("beforeend", `<span class="btn-text">${value}</span>`);
          tableRow.appendChild(cell);
        });
    
        board.appendChild(tableRow);
      });

    
  return board;
}

attachTableToButton();




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