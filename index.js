// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
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
let player = 1

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
   if (document.getElementById(index).innerHTML  === "X" || document.getElementById(index).innerHTML  === "O" ) {
    alert("th")
  } else {
  player++;
  if (player % 2 === 1) {
    fillButton(index, "X");
  } else {
    fillButton(index, "O");
  }} 
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
  [1,2,3], [4,5,6], [7,8,9],
  [1,4,7], [2,5,8], [3,6,9],
  [1,5,9,], [3,5,7],
]
function checkWinner() {
  let winPlayer = [
    
  ]
}

// function restartGame
