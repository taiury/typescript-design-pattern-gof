# Composite

o padrão composite permite compor objetos em estruturas de árvore para representar hierarquias partes/todo. Composite permise aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

exemplo em código:

```ts
// Component
export abstract class ProductComponent {
  abstract price: number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

//Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public nome: string, private _price: number) {
    super();
  }

  get price(): number {
    return this._price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  get price(): number {
    return this.children.reduce((sum, child) => sum + child.price, 0);
  }
}

// Client code
const pen = new ProductLeaf("Caneta", 3);
const smartphone = new ProductLeaf("Smartphone", 1_000);
const tShirt = new ProductLeaf("Camiseta", 40);

const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);

console.log(productBox); // ProductComposite { children: [ ProductLeaf { nome: 'Caneta', _price: 3 }, ProductLeaf { nome: 'Smartphone', _price: 1000 }, ...
console.log(productBox.price); // 1043

const tablet = new ProductLeaf("Tablet", 2_000);
const kindle = new ProductLeaf("Kindle", 300);

const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);

productBox.add(anotherProductBox);

console.log(productBox); // ProductComposite { children: [ ProductLeaf { nome: 'Caneta', _price: 3 }, ... }, ..., ProductComposite { children: [Array] } ] }
console.log(productBox.price); // 3343
```
