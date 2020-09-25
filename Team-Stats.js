let team = {
  _players : [
    {
      firstName: 'Yeongyeong', 
      lastName: 'Kim', 
      age: 32
    },
    {
      firstName: 'Dayeong', 
      lastName: 'Lee', 
      age: 23
    },
    {
      firstName: 'Miyeon', 
      lastName: 'Kim', 
      age: 27
    }
  ],
  _games : [
    {
      opponent: 'HILLSTATE',
      teamPoints: 75,
      opponentPoints: 50
    }, 
    {
      opponent: 'KIXX',
      teamPoints: 75,
      opponentPoints: 44
    },  
    {
      opponent: 'Altos',
      teamPoints: 75,
      opponentPoints: 40
    },  
  ],
  get players(){
    return {
      firstName: this.firstName, 
      lastName: this.lastName, 
      age: this.age
    }
  },
  get games(){
    return {
      opponent: this.opponent,
      teamPoints: this.teamPoints,
      opponentPoints: this.opponentPoints
    }
  },
  addPlayer(firstName, lastName, age){
    let player = {
      firstName,
      lastName,
      age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Subin','Do',22);
team.addPlayer('Jaeyeong','Lee',23);
team.addGame('KGC', 75, 49);

console.log(team._players);
console.log(team._games);
