import { ECommerceShoppingCart } from "../E-Commerce-Shopping-Cart";
import { DiscountStrategyProtocol } from "./Discount-Strategy-Protocol";

export class DefaultDiscountStrategy extends DiscountStrategyProtocol {
  protected discount: number = 5;
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();
    if (total >= 100 && total < 200) this.discount = 10;
    if (total >= 200 && total < 300) this.discount = 30;
    if (total >= 300) this.discount = 30;

    return total - total * (this.discount / 100);
  }
}
