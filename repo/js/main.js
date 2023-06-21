
var playerOne = 'X';                  //Create the global variables for the players
var playerTwo = 'O';
var staleMate = 'Stalemate';
// var winner =;
let playerOneWin = 0;   //starts at zero
let playerTwoWin = 0;
let stalemateWin = 0;
// var threeInRow =;

function attachTableToButton() {
    document.getElementById("app").appendChild(createBOARD()); //took the app div and appended the createBOARD function to it
  }                                                            //which is what makes the tictactoe board and resets the table
  var button = document.getElementById("resetBoard");           
  button.addEventListener("click", attachTableToButton);

//   function attachTableToButton() {                       //much more convoluted way of doing this from weather app project
//     var appTable = createBOARD();
//     var appDiv = document.getElementById("app");
//     appDiv.appendChild(appTable);
//   }

// const boardTicTacToe =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]; 


function createBOARD() {
    var board = document.createElement("table");
    board.classList.add("table", "table-bordered");

    var rowOne = ['1', '2', '3'];
    var rowTwo = ['4', '5', '6'];
    var rowThree = ['7', '8', '9'];

    var rowOneRow =document.createElement("tr");
    rowOneRow.innerHTML =rowOne.map(value => `<td class="d-table-cell p-5 bd-highlight">${value}<button class="btn btn-primary choose-tile">Choose tile</button></td>`).join('');
    board.appendChild(rowOneRow);


    var rowTwoRow =document.createElement("tr");
    rowTwoRow.innerHTML =rowTwo.map(value => `<td class="d-table-cell p-5 bd-highlight">${value}<button class="btn btn-primary choose-tile">Choose tile</button></td>`).join('');
    board.appendChild(rowTwoRow);
    //the innerHTML only works because the table is attached to the document up above

    var rowThreeRow = document.createElement("tr");
    rowThreeRow.innerHTML = rowThree.map(value => `<td class="d-table-cell p-5 bd-highlight">${value}<button class="btn btn-primary choose-tile">Choose tile</button></td>`).join(''); //used the map function to append the values of the variable rowTwo to each cell of the row
    board.appendChild(rowThreeRow);                                 //.join gets rid of the the commas

    // ^ ABOVE IS THE LESS CONVOLUTED WAY ^
    // var rowThreeRow = document.createElement("tr");
    // rowThree.forEach(function(value) {
    //   var cell = document.createElement("td");
    //   cell.textContent = value;
    //   rowThreeRow.appendChild(cell);
    // });
    // board.appendChild(rowThreeRow);
    const button = document.getElementById("chooseTile");
    let onOff = false;

    button.addEventListener("click", function() {
        if (onOff) {
          button.textContent = "X";
          onOff = false;
        } else {
          button.textContent = "O";
          onOff = true;
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