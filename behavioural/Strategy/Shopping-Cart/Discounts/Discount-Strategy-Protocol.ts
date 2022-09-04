import { ECommerceShoppingCart } from "../E-Commerce-Shopping-Cart";

export abstract class DiscountStrategyProtocol {
  protected abstract discount: number;
  abstract getDiscount(cart: ECommerceShoppingCart): number;
}
