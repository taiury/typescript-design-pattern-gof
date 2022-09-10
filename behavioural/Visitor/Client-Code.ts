import { AlcoholicDrink, Cigarette, Food } from "./products";
import { BrazilTaxVisitor, USTaxVisitor } from "./taxes";

const food = new Food(100);
const cigarette = new Cigarette(150);
const alcoholicDrink = new AlcoholicDrink(250);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];

const brazilTaxVisitorTotal = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0
);
const usTaxVisitorTotal = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum,
  0
);

//Brazil
console.log("Brazil", brazilTaxVisitorTotal); // 875
//US
console.log("US", usTaxVisitorTotal); // 950
