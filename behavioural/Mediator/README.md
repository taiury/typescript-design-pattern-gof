# Mediator

O padrão mediator define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que você varie suas interações independentemente.

Exemplo em código:

```ts
export type SellerProduct = { id: string; name: string; price: number };

// Colleague
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

// Concrete Mediator
export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.mediator = this;
    });
  }

  buy(id: string): SellerProduct | void {
    let product;
    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log("Aqui está", product.id, product.name, product.price);
        return;
      }
    }

    console.log("Não encontrei nenhum produto com id", id);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}

export class Buyer {
  constructor(private mediator: Mediator) {}

  viewProducts(): void {
    this.mediator.showProducts();
  }

  buy(id: string): void {
    this.mediator.buy(id);
  }
}

//Client code
const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: "1", name: "Camiseta", price: 25 });
seller1.addProduct({ id: "2", name: "Caneta", price: 1.85 });

mediator.addSeller(seller1);
const buyer = new Buyer(mediator);

buyer.viewProducts();
buyer.buy("2");
buyer.viewProducts();
```
