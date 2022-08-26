import { ProductProtocol } from "./Product-Protocol";

export class ProductDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  get price(): number {
    return this.product.price;
  }

  get name(): string {
    return this.product.name;
  }
}
