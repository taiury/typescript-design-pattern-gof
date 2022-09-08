import { CEOBudgetHandler } from "./budget/CEO-Budget-Handler";
import { CustomerBudget } from "./budget/Customer-Budget";
import { DirectorBudgetHandler } from "./budget/Director-Budget-Handler";
import { ManagerBudgetHandler } from "./budget/Manager-Budget-Handler";
import { SellerBudgetHandler } from "./budget/Seller-Budget-Handler";

const customerBudget = new CustomerBudget(10);
const customerBudget2 = new CustomerBudget(5000);
const customerBudget3 = new CustomerBudget(50000);
const customerBudget4 = new CustomerBudget(500000);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);

console.log("##########");
seller.handle(customerBudget2);
console.log(customerBudget2);

console.log("##########");
seller.handle(customerBudget3);
console.log(customerBudget3);

console.log("##########");
seller.handle(customerBudget4);
console.log(customerBudget4);
