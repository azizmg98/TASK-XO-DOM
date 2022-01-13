// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
  checkWinner();
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  confirm(`Horraaay, ${winner} wins!`);
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/*
for each button click screen prints O and X alternate
*/
/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let player = 1;

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.

  checkWinner();
  if (
    document.getElementById(index).innerHTML === "X" ||
    document.getElementById(index).innerHTML === "O"
  ) {
    alert("YOU CANNOT PRESS AT THE SAME SPOT TWICE");
  } else {
    player++;
    if (player % 2 === 1) {
      fillButton(index, "X");
    } else {
      fillButton(index, "O");
    }
  }
}

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer() {
  // ....
  // if (fillButton(index, "X")){
  //  return player = false; player2 = true
  // } else if (fillButton(index, "O")){
  //   return player2 = false; player = true
  // }
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
let winCondition = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
function checkWinner() {
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("1").innerHTML;
  b2 = document.getElementById("2").innerHTML;
  b3 = document.getElementById("3").innerHTML;
  b4 = document.getElementById("4").innerHTML;
  b5 = document.getElementById("5").innerHTML;
  b6 = document.getElementById("6").innerHTML;
  b7 = document.getElementById("7").innerHTML;
  b8 = document.getElementById("8").innerHTML;
  b9 = document.getElementById("9").innerHTML;

  if (b1 === "X" && b2 === "X" && b3 === "X") {
    alert("player X win");
    restartGame();
  } else if (b4 === "X" && b5 === "X" && b6 === "X") {
    alert("player X win");
    restartGame();
  } else if (b7 === "X" && b8 === "X" && b9 === "X") {
    alert("player X win");
    restartGame();
  } else if (b1 === "X" && b4 === "X" && b7 === "X") {
    alert("player X win");
    restartGame();
  } else if (b2 === "X" && b5 === "X" && b8 === "X") {
    alert("player X win");
    restartGame();
  } else if (b3 === "X" && b6 === "X" && b9 === "X") {
    alert("player X win");
    restartGame();
  } else if (b3 === "X" && b5 === "X" && b7 === "X") {
    alert("player X win");
    restartGame();
  } else if (b1 === "X" && b5 === "X" && b9 === "X") {
    alert("player X win");
    restartGame();
  } else if (b1 === "O" && b2 === "O" && b3 === "O") {
    alert("player O win");
    restartGame();
  } else if (b4 === "O" && b5 === "O" && b6 === "O") {
    alert("player O win");
    restartGame();
  } else if (b7 === "O" && b8 === "O" && b9 === "O") {
    alert("player O win");
    restartGame();
  } else if (b1 === "O" && b4 === "O" && b7 === "O") {
    alert("player O win");
    restartGame();
  } else if (b2 === "O" && b5 === "O" && b8 === "O") {
    alert("player O win");
    restartGame();
  } else if (b3 === "O" && b6 === "O" && b9 === "O") {
    alert("player O win");
    restartGame();
  } else if (b3 === "O" && b5 === "O" && b7 === "O") {
    alert("player O win");
    restartGame();
  } else if (b1 === "O" && b5 === "O" && b9 === "O") {
    alert("player O win");
    restartGame();
  } else if (
    (b1 === "X" || b1 === "O") &&
    (b2 === "X" || b2 === "O") &&
    (b3 === "X" || b3 === "O") &&
    (b4 === "X" || b4 === "O") &&
    (b5 === "X" || b5 === "O") &&
    (b6 === "X" || b6 === "O") &&
    (b7 === "X" || b7 === "O") &&
    (b8 === "X" || b8 === "O") &&
    (b9 === "X" || b9 === "O")
  ) {
    alert("It's a tie");
    restartGame();
  }
}

function restartGame() {
  document.getElementById("1").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("5").innerHTML = "";
  document.getElementById("6").innerHTML = "";
  document.getElementById("7").innerHTML = "";
  document.getElementById("8").innerHTML = "";
  document.getElementById("9").innerHTML = "";
}
