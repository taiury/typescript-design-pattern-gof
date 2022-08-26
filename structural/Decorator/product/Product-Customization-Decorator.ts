import { ProductDecorator } from "./Product-Decorator";

export class ProductCustomizationDecorator extends ProductDecorator {
  get name(): string {
    return this.product.name + " (Customizada)";
  }

  get price(): number {
    return this.product.price + 35;
  }
}
