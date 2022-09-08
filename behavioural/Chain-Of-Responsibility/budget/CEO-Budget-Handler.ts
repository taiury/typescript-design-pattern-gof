import { BaseBudgetHandler } from "./Base-Budget-Handler";
import { CustomerBudget } from "./Customer-Budget";

export class CEOBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log("O CEO trata qualquer orçamento.");
    budget.approved = true;
    return budget;
  }
}
