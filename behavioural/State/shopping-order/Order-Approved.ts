import { OrderPending } from "./Order-Pending";
import { OrderRejected } from "./Order-Rejected";
import { ShoppingOrder } from "./Shopping-Order";
import { ShoppingOrderState } from "./Shopping-Order-State";

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
