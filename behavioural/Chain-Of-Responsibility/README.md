# Chain of responsibility

O padrão Chain of responsibility evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate.

Exemplo em código:

```ts
export class CustomerBudget {
  public approved = false;

  constructor(public total: number) {}
}

// abstract Handler
export abstract class BaseBudgetHandler {
  protected nextHandler?: BaseBudgetHandler;

  setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handle(budget);
    return budget;
  }
}

// Concrete Handler
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

export class ManagerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log("O gerente tratou o orçamento");
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log("O diretor tratou o orçamento");
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}

// client code
const customerBudget = new CustomerBudget(1200);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);
```
