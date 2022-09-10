import { AlcoholicDrink, Cigarette, Food } from "../products";
import { TaxVisitorProtocol } from "./Tax-Visitor-Protocol";

export class USTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.price + food.price * 0.125;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.price + cigarette.price * 1.25;
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.price + alcoholicDrink.price * 1;
  }
}
