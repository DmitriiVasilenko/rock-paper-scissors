function showAlert() {
const playerSelection = prompt("Please choose any value from the list below and type it keeping the case:" + "\n" + "rock" + "\n" + "paper" + "\n" + "scissors").toLowerCase();
function getComputerChoice() {
    do {
        number = Math.random();
      }
      while (number >= 0.9);
    if (number < 0.3) {
      result = "rock";
    } else if (number < 0.6) {
      result = "paper";
    } else {
      result = "scissors";
    };
    return result;
};
const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
  switch(true) {
  case playerSelection == "rock" && computerSelection == "paper":
    result = "Computer won";
    break;
  case playerSelection == "rock" && computerSelection == "scissors":
    result = "You won";
    break;
    case playerSelection == "rock" && computerSelection == "rock":
    result = "Tie";
    break;
    case playerSelection == "paper" && computerSelection == "rock":
      result = "You won";
    break;
    case playerSelection == "paper" && computerSelection == "scissors":
      result = "Computer won";
    break;
    case playerSelection == "paper" && computerSelection == "paper":
      result = "Tie";
    break;
    case playerSelection == "scissors" && computerSelection == "rock":
      result = "Computer won";
    break;
    case playerSelection == "scissors" && computerSelection == "paper":
      result = "You won";
    break;
    case playerSelection == "scissors" && computerSelection == "scissors":
      result = "You won";
    break;
  default:
      result = "You entered invalid value";
    break;
}
return result;
};
const gameResult = "Your choice: " + playerSelection + "\n" + "Computer choice: " + computerSelection + "\n" + "The result: " + playRound(playerSelection, computerSelection);

    alert(gameResult)
  };