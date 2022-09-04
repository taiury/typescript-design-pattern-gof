import { ECommerceShoppingCart } from "../E-Commerce-Shopping-Cart";
import { DiscountStrategyProtocol } from "./Discount-Strategy-Protocol";

export class NewDiscountStrategy extends DiscountStrategyProtocol {
  protected discount: number = 5;
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) this.discount = 5;

    return total - total * (this.discount / 100);
  }
}
