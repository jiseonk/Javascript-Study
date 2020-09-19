let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const checkRangeofNumber = userNumber => {
  if(userNumber>9 || userNumber<0){
    alert(`Please write between 0~9`);
    return 0;
}
};


// Generate the new secret target number at the start of each new round
const generateTarget = () => Math.floor(Math.random()*10);

// Calculate the distance
const getAbsoluteDistance = (whoGuess, targetNumber) => Math.abs(targetNumber - whoGuess);

// Determine who is winner
const compareGuesses = (humanGuess, computerGuess, targetNumber) =>{
  const userDistance = getAbsoluteDistance(humanGuess, targetNumber);
  const computerDistance = getAbsoluteDistance(computerGuess,targetNumber);
  if(userDistance <= computerDistance){
    return true;
  } else if(userDistance > computerDistance){
    return false;
  } else {
    console.log(`Error!`);
  }
};

// Increase the winner's score
const updateScore = winner => {
  if(winner==='human'){
    humanScore++;
  } else if(winner==='computer'){
    computerScore++;
  } else {
    console.log(`Error!`);
  }
};

// Update the round number after each round
const advanceRound = () => currentRoundNumber++;

