// Create parent class for primary, high school
class School{
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(num){
    if(typeof(num)==='number'){
      this._numberOfstudents = num;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }  

  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers){
    const index = Math.floor(Math.random()*(substituteTeachers.length-1));
    return substituteTeachers[index];
  }
}


// Create PrimarySchool class
class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

// Create HighSchool class
class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name,'High',numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}

// Create MiddleSchool class
class MiddleSchool extends School{
  constructor(name, numberOfStudents){
    super(name, 'Middle', numberOfStudents);
  }
}

// Instance of PrimarySchool
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
console.log(`Today's substitute teacher : ${School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])}`);


// Instance of HighSchool
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.quickFacts();
alSmith.sportsTeams;

