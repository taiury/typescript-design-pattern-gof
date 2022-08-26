import { BuilderFacade } from "./Builder-facade";

const builderfacade = new BuilderFacade();

builderfacade.makeMeal1();
//MainDishBuilder { _meal: MealBox { _children: [ [Rice], [Beans], [Meat], [Dessert] ] } }
// 42

builderfacade.makeMeal2();
// MainDishBuilder { _meal: MealBox { _children: [ [Beverage] ] } }
// 7
