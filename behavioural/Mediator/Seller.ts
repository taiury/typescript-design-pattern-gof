import { SellerProduct } from "./Seller-Product";
import { Mediator } from "./Mediator";

export class Seller {
  private products: SellerProduct[] = [];
  private _mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((product) =>
      console.log(product.id, product.name, product.price)
    );
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  set mediator(concreteMediator: Mediator) {
    this._mediator = concreteMediator;
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex === -1) return;

    const product = this.products.splice(productIndex, 1);
    return product[0];
  }

  viewProducts(): void {
    if (!this._mediator) return;
    this._mediator.showProducts();
  }

  buy(id: string): void {
    if (!this._mediator) return;
    this._mediator.buy(id);
  }
}
