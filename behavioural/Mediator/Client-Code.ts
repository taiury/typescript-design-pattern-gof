import { Buyer } from "./Buyer";
import { Mediator } from "./Mediator";
import { Seller } from "./Seller";

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: "1", name: "Camiseta", price: 25 });
seller1.addProduct({ id: "2", name: "Caneta", price: 1.85 });

const seller2 = new Seller();
seller2.addProduct({ id: "3", name: "PC", price: 702.98 });
seller2.addProduct({ id: "4", name: "Teclado", price: 170.47 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy("2");
buyer.buy("3");
buyer.viewProducts();
