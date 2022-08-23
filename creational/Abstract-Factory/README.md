# Abstract Factory

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

exemplo em código:

```ts
export interface Customer {
  name: string;
}

export interface Vehicle {
  pickUp(): void;
}

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name += " (Enterprise Customer)";
  }
}

export class EnterpriseVehicle implements Vehicle {
  constructor(public name: string, private readonly customerName: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customerName.name} (Enterprise Vehicle)`
    );
  }
}

export class IndividualCustomer implements Customer {
  constructor(public name: string) {
    this.name += " (Individual Customer)";
  }
}

export class IndividualVehicle implements Vehicle {
  constructor(public name: string, private readonly customerName: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customerName.name} (Individual Vehicle)`
    );
  }
}

export interface MakeCustomerVehicleFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}

export class MakeEnterpriseCustomerVehicleFactory
  implements MakeCustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }
}

export class MakeIndividualCustomerVehicleFactory
  implements MakeCustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualVehicle(vehicleName, customer);
  }
}

const enterpriseFactory = new MakeEnterpriseCustomerVehicleFactory();
const individualFactory = new MakeIndividualCustomerVehicleFactory();

const vehicle1 = enterpriseFactory.createVehicle("Fusca", "Taiury");
const vehicle2 = individualFactory.createVehicle("Celta", "Rafael");

vehicle1.pickUp(); // Fusca está buscando Taiury (Enterprise Customer) (Enterprise Vehicle)
vehicle2.pickUp(); // Celta está buscando Rafael (Individual Customer) (Individual Vehicle)
```
