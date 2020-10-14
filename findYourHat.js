const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
    this._field = field;
  }

  get field(){
    return this._field;
  }

  print(){
    for(let i=0; i<this._field.length; i++){
       console.log(this._field[i].join(""));
    }
  }

  static generateField(height, width){

  }

  playGame(){
    let i=0, j=0;
    for(let k=0; ;k++){
      const direction = prompt("Which direction would you like to move?");
      this.field[i][j] = fieldCharacter;

    // Increase or decrease i, j by direction
      if(direction === 'left'){
        j--;
      } else if(direction === 'up'){
        i--;
      } else if(direction === 'right'){
        j++;
      } else if(direction === 'down'){
        i++;  
      }

    // Make sure to not get out of the area
      if(i > 3) {
        i--;
      } else if(i < 0){
        i++;
      } else if(j > 3){
        j--;
      } else if(j < 0){
        j++;
      }

    // Decide user's state by the location
      if(this.field[i][j]===fieldCharacter){
        this.field[i][j] = '*';
      } else if(this.field[i][j]===hole){
        console.log('Game Over. Try Again.');
        break;
      } else if(this.field[i][j]===hat){
        console.log('Congratulations! You did it!');
        break;
      }
    
    // print field
      this.print();
    }
  }
}


// The Field constructor take a two-dimensional array
const myField = new Field([
  [pathCharacter, fieldCharacter, hole],
  [fieldCharacter, hole, fieldCharacter],
  [fieldCharacter, hat, fieldCharacter],
]);

myField.print();
myField.playGame();

