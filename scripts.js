let playerpoints1=0
let playerpoints2=0
let tie=0
let round=0

let playerSelection = ""
let computerSelection = ""

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('#rock,#paper,#scissors');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
// and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection=button.value
    computerSelection=getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateUi()
  

  
      function getComputerChoice() {
        do {
            number = Math.random();
          }
        while (number >= 0.9);
        switch (true) {
          case number>0 && number<0.3:
            return "rock"
          case number>=0.3 && number<0.6:
            return "paper"
          case number>=0.6 && number<0.9:
            return "scissors"
       };
      }

  


  function playRound(playerSelection, computerSelection) {
    switch(true) {
    case playerSelection == "rock" && computerSelection == "rock":
      result = "Tie";
      tie++;
      round++;
      break;
    case playerSelection == "rock" && computerSelection == "paper":
      result = "Computer won";
      playerpoints2++;
      round++;
      break;
      case playerSelection == "rock" && computerSelection == "scissors":
      result = "You won";
      playerpoints1++;
      round++;
      break;
      case playerSelection == "paper" && computerSelection == "rock":
        result = "You won";
        playerpoints1++;
        round++;
      break;
      case playerSelection == "paper" && computerSelection == "paper":
        result = "Tie";
        tie++;
        round++;
      break;
      case playerSelection == "paper" && computerSelection == "scissors":
        result = "Computer won";
        playerpoints2++;
        round++;
      break;
      case playerSelection == "scissors" && computerSelection == "rock":
        result = "Computer won";
        playerpoints2++;
        round++;
      break;
      case playerSelection == "scissors" && computerSelection == "paper":
        result = "You won";
        playerpoints1++;
        round++;
      break;
      case playerSelection == "scissors" && computerSelection == "scissors":
        result = "Tie";
        tie++;
        round++;
      break;
    default:
        result = "You entered invalid value";
      break;
  }
  return result;
  };

  function updateUi() {
  document.getElementById("playerpoints1").innerHTML = playerpoints1;
  document.getElementById("playerpoints2").innerHTML = playerpoints2;
  document.getElementById("roundnumber").innerHTML = round;
  document.getElementById("tienumber").innerHTML = tie;
  document.getElementById("userselect").innerHTML = "Your last choice: "+playerSelection;
  document.getElementById("compselect").innerHTML = "Computer last choice: "+computerSelection;

  if (round>0 && playerpoints1<5 && playerpoints2<5) {
    document.getElementById("invitation").innerHTML = "Please click any button bellow to continue the game"}
    else {
    document.getElementById("invitation").innerHTML = "Please click any button bellow to start the new game";
    }
  if (playerpoints1==5) {
    document.getElementById("result").innerHTML = "Congratilations! You are the winner! Restart?"
  }
    else if (playerpoints2==5){
    document.getElementById("result").innerHTML = "Better luck next time. Computer is the winner! Restart?"
    }
    if (playerpoints1>4 || playerpoints2>4) {
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
    }
  }
})})

function restartGame() {
  playerpoints1=0
  playerpoints2=0
  tie=0
  round=0
  document.getElementById("playerpoints1").innerHTML = 0;
  document.getElementById("playerpoints2").innerHTML = 0;
  document.getElementById("roundnumber").innerHTML = 0;
  document.getElementById("tienumber").innerHTML = 0;
  document.getElementById("invitation").innerHTML = "Please click any button bellow to start the new game";
  document.getElementById("result").innerHTML = ""
  document.getElementById("userselect").innerHTML = ""
  document.getElementById("compselect").innerHTML = ""
  document.getElementById("rock").removeAttribute('disabled')
  document.getElementById("paper").removeAttribute('disabled')
  document.getElementById("scissors").removeAttribute('disabled')
}
document.getElementById("reload").addEventListener("click", restartGame);
