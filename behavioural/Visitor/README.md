# Visitor

O padrão visitor representa uma operação a ser executada sobre os elementos da estrutura de um objeto. O visitor permite que você defina uma nova operação sem mudar as classes dos elementos sobre os quais opera.

Exemplo em código:

```ts
// interface Element
export abstract class Product {
  constructor(protected _name: string, protected _price: number) {}

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number;
}

// interface Visitor
export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}

// elements
export class Food extends Product {
  constructor(protected _price: number) {
    super("Food", _price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}

export class AlcoholicDrink extends Product {
  constructor(protected _price: number) {
    super("AlcoholicDrink", _price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}

export class Cigarette extends Product {
  constructor(protected _price: number) {
    super("Cigarette", _price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}

// visitor
export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.price + food.price * 0.25;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.price + cigarette.price * 1.5;
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.price + alcoholicDrink.price * 0.5;
  }
}

// client code
const food = new Food(10);
const cigarette = new Cigarette(10);
const alcoholicDrink = new AlcoholicDrink(10);

const brazilTaxVisitor = new BrazilTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];

const total = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0
);

console.log(total);
```
