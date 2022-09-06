import { OrderPending } from "./Order-Pending";
import { ShoppingOrderState } from "./Shopping-Order-State";

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
