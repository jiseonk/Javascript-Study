let menu = {
  _courses : {
    appetizers:[],
    mains:[],
    desserts:[],
    },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  
  //Getter and Setter
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
   return this._courses.mains;  
  },
  get desserts(){
      return this._courses.desserts;
  },
  set appetizers(appetizerIn){
    this._courses.appetizers = appetizerIn;
  },
  set mains(mainIn){
   this._courses.mains = mainIn;
  },
  set desserts(dessertsIn){
      this._courses.desserts = dessertsIn;
  },

  // Methods
  addDishToCourse(courseName,dishName,dishPrice){
    const dish={
      name:dishName,
      price:dishPrice
    };
    //console.log(this._courses[courseName]);
    this._courses[courseName].push(dish); 
    //How to use setter method in this case?
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return this._courses[courseName][randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return`Today's Meal : ${appetizer.name}, ${main.name}, ${dessert.name}, and Total Price is ${totalPrice} $`;
  }
};

// Add at least 3 dishes to each course
menu.addDishToCourse('appetizers', 'Caesar Salad', '7.50');
menu.addDishToCourse('appetizers', 'Chicken Caesar Salad', '8.25');
menu.addDishToCourse('appetizers', 'Butternut Hummus', '6.25');
menu.addDishToCourse('mains', 'Low Carb Turkey-Stuffed Peppers', '27.25');
menu.addDishToCourse('mains', 'Grilled Salmon', '25.00');
menu.addDishToCourse('mains', 'Juicy Roasted Chicken', '27.99');
menu.addDishToCourse('mains', 'Baked BBQ Baby Back Ribs', '31.99');
menu.addDishToCourse('desserts', 'Triamisu', '4.99');
menu.addDishToCourse('desserts', 'Apple and Butterscotch Pie', '12.25');
menu.addDishToCourse('desserts', 'Affogato', '5.79');
menu.addDishToCourse('desserts', 'Amaretto Bruelee', '4.99');
menu.addDishToCourse('desserts', 'Aniseed and Chocolate Parfait', '7.99');

let meal = menu.generateRandomMeal();
console.log(meal);

