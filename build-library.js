// Create parent class for book, movie, cd
class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  set isCheckedOut(param){
    this._isCheckedOut = param;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating(){
   let sum = this.ratings.reduce((paramOne,paramTwo)=>{
      return paramOne+paramTwo;
    });
   return sum/this.ratings.length;
  }

  addRating(newRating){
    this.ratings.push(newRating);
  }
}


// Create Book class
class Book extends Media {
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

// Create Movie class
class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

// Create CD class
class CD extends Media {
  constructor(title, artist){
    super(title);
    this._artist = artist;  
    this._songs = [];
  }

  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }

  addSongs(newSong){
    this.songs.push(newSong);
  }

  shuffle(){
    let array = this.songs;
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j],array[i]];
    }
    return array;
  }
}


// Create Book instance
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // true

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Create Movie instance
const speed = new Movie('Speed','Jan de Bont',116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

// Create CD instance
const reputation = new CD('Reputation','Taylor Swift');

reputation.addSongs('...Ready For it?');
reputation.addSongs('End Game');
reputation.addSongs('Delicate');
reputation.addSongs('So It Goes..');
reputation.addSongs('Getaway Car');

reputation.toggleCheckOutStatus();
console.log(reputation.isCheckedOut);

reputation.addRating(5);
reputation.addRating(4);
reputation.addRating(5);
console.log(reputation.getAverageRating());

// Shuffle songs of reputation
console.log(reputation.songs);
let shuffleReputation = reputation.shuffle();
console.log(shuffleReputation);
