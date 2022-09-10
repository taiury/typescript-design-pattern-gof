import { TaxVisitorProtocol } from "../taxes";
import { Product } from "./Product";

export class AlcoholicDrink extends Product {
  constructor(protected _price: number) {
    super("AlcoholicDrink", _price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
