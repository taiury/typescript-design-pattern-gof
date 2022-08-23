import { MealCompositeProtocol } from "../interfaces/Meal-Composite-Protocol";

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  get price(): number {
    return this._children.reduce((sum, meal) => sum + meal.price, 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
