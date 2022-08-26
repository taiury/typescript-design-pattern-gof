# Decorator

O padrão decorator atribui responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível à subclasses para extensão da funcionalidade.

Exemplo em código:

```ts
// interface
export interface ProductProtocol {
  get price(): number;
  get name(): string;
}

// decorator
export class ProductDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  get price(): number {
    return this.product.price;
  }

  get name(): string {
    return this.product.name;
  }
}

// product
export class TShirt implements ProductProtocol {
  private _price: number = 49.9;
  private _name: string = "Camiseta";

  get price(): number {
    return this._price;
  }

  get name(): string {
    return this._name;
  }
}

// implement decorator
export class ProductStampDecorator extends ProductDecorator {
  get name(): string {
    return this.product.name + " (Estampada)";
  }
  get price(): number {
    return this.product.price + 10;
  }
}

//client code
const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);

//tShirt
console.log(tShirt.name); // Camiseta
console.log(tShirt.price); // 49.9

// tShirtWithStamp
console.log(tShirtWithStamp.name); // Camiseta (Estampada)
console.log(tShirtWithStamp.price); // 59.9
```
