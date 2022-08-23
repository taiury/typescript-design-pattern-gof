import { MainDishBuilder } from "./classes";

const mainDishBuilder = new MainDishBuilder();

const meal1 = mainDishBuilder.makeMeal().makeDessert().meal;
mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().meal;
mainDishBuilder.reset();

//meal1
console.log(meal1); // MealBox {_children: [Objects]}
console.log(meal1.price); // 42

//meal2
console.log(meal2); // MealBox { _children: [ Beverage { name: 'Bebida', _price: 7 } ] }
console.log(meal2.price); // 7
