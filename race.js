let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let runnerAge = 18;

if(runnerAge>18 && early){
  raceNumber+=1000;
}

if(runnerAge>18 && early){
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`);
} else if(runnerAge>18 && !early){
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
} else if(runnerAge<18) {
  console.log(`You will race at 12:30 am. Your race number is ${raceNumber}`);
} else {
  console.log('Runners who are 18 years old should see the registration desk.');
}
