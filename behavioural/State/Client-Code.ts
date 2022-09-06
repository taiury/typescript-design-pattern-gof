import { ShoppingOrder } from "./shopping-order/Shopping-Order";

const order = new ShoppingOrder(); // Pendente
order.shipOrder(); // Não
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.rejectPayment(); // rejeitado
order.waitPayment(); // Não
order.approvePayment(); // Não
order.shipOrder(); // Não
