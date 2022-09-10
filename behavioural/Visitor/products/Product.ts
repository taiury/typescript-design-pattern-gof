import { TaxVisitorProtocol } from "../taxes";

export abstract class Product {
  constructor(protected _name: string, protected _price: number) {}

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number;
}
