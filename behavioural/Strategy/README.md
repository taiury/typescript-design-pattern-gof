# Strategy

O padrão strategy define uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

```ts
// Context
export interface ECommerceProductProtocol {
  name: string;
  price: number;
}

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

// Strategy
export abstract class DiscountStrategyProtocol {
  protected abstract discount: number;
  abstract getDiscount(cart: ECommerceShoppingCart): number;
}

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

export class NewDiscountStrategy extends DiscountStrategyProtocol {
  protected discount: number = 5;
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) this.discount = 5;

    return total - total * (this.discount / 100);
  }
}

//client code
const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discountStrategy = new NewDiscountStrategy();
shoppingCart.addProduct({ name: "Product 1", price: 50 });
shoppingCart.addProduct({ name: "Product 2", price: 50 });
shoppingCart.addProduct({ name: "Product 3", price: 50 });

console.log(shoppingCart.getTotal()); // 150
console.log(shoppingCart.getTotalWithDiscount()); // 142.5
```
