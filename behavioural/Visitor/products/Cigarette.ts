import { TaxVisitorProtocol } from "../taxes";
import { Product } from "./Product";

export class Cigarette extends Product {
  constructor(protected _price: number) {
    super("Cigarette", _price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
