const getUserChoice =  userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'||'paper'||'scissors'){
    return userInput;
  } else {
    console.log('error!');
  }
};


const getComputerChoice = () => {
  let num = Math.random()*3;
  num = Math.floor(num);

  switch(num) {
    case 0 : return 'rock'; break;
    case 1 : return 'paper'; break;
    case 2 : return 'scissors'; break;
    default : return 'error!'; break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
   if(userChoice === computerChoice){
     return 'the game was a tie.';
   }
   if(userChoice ==='rock'){
     if(computerChoice==='paper'){
       return 'the computer won!';
     } else {
       return '🎊Congratulations! You won!🎊';
     }
   }
   if(userChoice ==='paper'){
     if(computerChoice==='scissors'){
       return 'the computer won!';
     } else {
       return '🎊Congratulations! You won!🎊';
     }
   }
   if(userChoice ==='scissors'){
     if(computerChoice==='rock'){
       return 'the computer won!';
     } else {
       return '🎊Congratulations! You won!🎊';
     }
   }
};


const playGame = (userChoice = getUserChoice('rock'),computerChoice = getComputerChoice()) => {
  console.log(`user = ${userChoice}`);
  console.log(`computer = ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
