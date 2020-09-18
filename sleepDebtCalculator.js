const getSleepHours = day => {
  day = day.toLowerCase();
  if(day==='monday'){
    return 8;
  } else if(day==='tuesday'){
    return 8;
  } else if(day==='wednesday'){
    return 8;
  } else if(day==='thursday'){
    return 6;
  } else if(day==='friday'){
    return 6;
  } else if(day==='saturday'){
    return 8;
  } else if(day==='sunday'){
    return 8;
  } else {
    console.log('error!');
  }
};

const getActualSleepHours = () => getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');

const getIdealSleepHours = hours => {
  let idealHours = hours;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

  if(actualSleepHours === idealSleepHours){
    console.log(`You got the perfect amount of sleep🛌`);
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than needed.`);
  } else if(actualSleepHours < idealSleepHours){
    console.log(`You got ${idealSleepHours-actualSleepHours } hours less than needed. You should get some rest`);
  }
};

calculateSleepDebt();
