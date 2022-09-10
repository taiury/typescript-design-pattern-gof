import { AlcoholicDrink, Cigarette, Food } from "../products";
import { TaxVisitorProtocol } from "./Tax-Visitor-Protocol";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.price + food.price * 0.25;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.price + cigarette.price * 1.5;
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.price + alcoholicDrink.price * 0.5;
  }
}
