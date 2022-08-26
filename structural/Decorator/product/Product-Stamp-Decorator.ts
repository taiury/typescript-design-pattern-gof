import { ProductDecorator } from "./Product-Decorator";

export class ProductStampDecorator extends ProductDecorator {
  get name(): string {
    return this.product.name + " (Estampada)";
  }
  get price(): number {
    return this.product.price + 10;
  }
}
