import { MealBuilderProtocol } from "../interfaces/Meal-Builder-Protocol";
import { Beans, Beverage, Dessert, MealBox, Meat, Rice } from "../classes";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);
    const meat = new Meat("Carne", 20);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("Bebida", 7);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("Bebida", 7);
    this._meal.add(dessert);
    return this;
  }

  get meal(): MealBox {
    return this._meal;
  }

  get price(): number {
    return this._meal.price;
  }
}
