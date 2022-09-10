import { TaxVisitorProtocol } from "../taxes";
import { Product } from "./Product";

export class Food extends Product {
  constructor(protected _price: number) {
    super("Food", _price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
