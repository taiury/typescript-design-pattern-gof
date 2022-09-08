import { BaseBudgetHandler } from "./Base-Budget-Handler";
import { CustomerBudget } from "./Customer-Budget";

export class SellerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log("O vendedor tratou o orçamento");
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
