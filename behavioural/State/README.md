# State

O padrão state permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe.

Exemplo em código:

```ts
// interface state
export interface ShoppingOrderState {
  get name(): string;
  approvePayment(): void;
  rejectPayment(): void;
  waitPayment(): void;
  shipOrder(): void;
}

// states
export class OrderApproved implements ShoppingOrderState {
  private _name = "OrderApproved";
  constructor(private order: ShoppingOrder) {}

  get name(): string {
    return this._name;
  }

  approvePayment(): void {
    console.log("O pedido já está no estado pagamento aprovado.");
  }

  rejectPayment(): void {
    this.order.state = new OrderRejected(this.order);
  }

  waitPayment(): void {
    this.order.state = new OrderPending(this.order);
  }

  shipOrder(): void {
    console.log("Enviando pedido para o cliente...");
  }
}

export class OrderPending implements ShoppingOrderState {
  private _name = "OrderPending";
  constructor(private order: ShoppingOrder) {}

  get name(): string {
    return this._name;
  }

  approvePayment(): void {
    this.order.state = new OrderApproved(this.order);
  }

  rejectPayment(): void {
    this.order.state = new OrderRejected(this.order);
  }

  waitPayment(): void {
    console.log("O pedido já está no estado pagamento pendente.");
  }

  shipOrder(): void {
    console.log("Não posso enviar pedido com pagamento pendente.");
  }
}

export class OrderRejected implements ShoppingOrderState {
  private _name = "OrderRejected";
  constructor(private order: ShoppingOrder) {}

  get name(): string {
    return this._name;
  }

  approvePayment(): void {
    console.log("Não posso aprovar o pagamento, poís o pedido foi recusado.");
  }

  rejectPayment(): void {
    console.log("O pedido já está no estado pagamento rejeitado.");
  }

  waitPayment(): void {
    console.log("Não posso mover para pendente, poís o pedido foi recusado.");
  }

  shipOrder(): void {
    console.log("Não posso enviar pedido com pagamento recusado.");
  }
}

// context
export class ShoppingOrder {
  private _state: ShoppingOrderState = new OrderPending(this);

  get state(): ShoppingOrderState {
    return this._state;
  }

  set state(state: ShoppingOrderState) {
    this._state = state;
    console.log(`O estado do pedido agora é ${this.stateName}`);
  }

  get stateName(): string {
    return this._state.name;
  }

  approvePayment(): void {
    this._state.approvePayment();
  }

  rejectPayment(): void {
    this._state.rejectPayment();
  }

  waitPayment(): void {
    this._state.waitPayment();
  }

  shipOrder(): void {
    this._state.shipOrder();
  }
}

// client code
const order = new ShoppingOrder(); // Pendente
order.shipOrder(); // Não
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder(); // Não
order.approvePayment(); // Aprovado
order.shipOrder(); // Sim
```
