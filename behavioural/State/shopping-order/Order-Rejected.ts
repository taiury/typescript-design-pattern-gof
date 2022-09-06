import { OrderApproved } from "./Order-Approved";
import { OrderPending } from "./Order-Pending";
import { ShoppingOrder } from "./Shopping-Order";
import { ShoppingOrderState } from "./Shopping-Order-State";

// deixo claro que este exemplo não é nem um pouco realista.
// pois dificilmente uma loja de vendas iria
// barrar uma compra feita pelo cliente, possivelmente iria
// ter outra chance de tentar finalizar a compra de forma
// benefica para ambos, cliente compra e loja vende.
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
