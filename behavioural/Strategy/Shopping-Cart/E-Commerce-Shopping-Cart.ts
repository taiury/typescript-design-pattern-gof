import { DiscountStrategyProtocol } from "./Discounts";
import { ECommerceProductProtocol } from "./E-Commerce-Pruduct-Protocol";

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private _discountStrategy?: DiscountStrategyProtocol;

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    if (!this._discountStrategy) return this.getTotal();
    return this._discountStrategy.getDiscount(this);
  }

  set discountStrategy(discount: DiscountStrategyProtocol) {
    this._discountStrategy = discount;
  }
}
