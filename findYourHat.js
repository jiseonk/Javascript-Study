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

}

// The Field constructor take a two-dimensional array
const myField = new Field([
  [pathCharacter, fieldCharacter, hole],
  [fieldCharacter, hole, fieldCharacter],
  [fieldCharacter, hat, fieldCharacter],
]);

myField.print();

// User Input
let i=0, j=0;
let presentLocation = myField.field[i][j];

for(let k=0; ;k++){
  const direction = prompt("Which direction would you like to move?");
// 37 : left, 38 : up, 39 : right, 40 : down
  if(direction === 37){
    j--;
  } else if(direction === 38){
    i--;
  } else if(direction === 39){
    j++;
  } else if(direction === 40){
    i++;  
  }

  if(i > 3) {
    i--;
  } else if(i < 0){
    i++;
  } else if(j > 3){
    j--;
  } else if(j < 0){
    j++;
  }

  presentLocation = '*';
  myField.print();
}
