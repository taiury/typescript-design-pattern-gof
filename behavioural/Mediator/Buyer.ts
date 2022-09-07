import { Mediator } from "./Mediator";

export class Buyer {
  constructor(private mediator: Mediator) {}

  viewProducts(): void {
    this.mediator.showProducts();
  }

  buy(id: string): void {
    this.mediator.buy(id);
  }
}
