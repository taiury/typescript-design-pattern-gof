import { OrderApproved } from "./Order-Approved";
import { OrderRejected } from "./Order-Rejected";
import { ShoppingOrder } from "./Shopping-Order";
import { ShoppingOrderState } from "./Shopping-Order-State";

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
