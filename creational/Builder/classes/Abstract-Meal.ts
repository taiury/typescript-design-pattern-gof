import { MealCompositeProtocol } from "../interfaces/Meal-Composite-Protocol";

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private _price: number) {}
  get price(): number {
    return this._price;
  }
}
