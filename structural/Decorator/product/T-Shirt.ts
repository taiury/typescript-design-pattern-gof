import { ProductProtocol } from "./Product-Protocol";
export class TShirt implements ProductProtocol {
  private _price: number = 49.9;
  private _name: string = "Camiseta";

  get price(): number {
    return this._price;
  }

  get name(): string {
    return this._name;
  }
}
