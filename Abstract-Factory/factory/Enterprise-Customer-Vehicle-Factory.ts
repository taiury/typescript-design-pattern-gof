import { Customer, EnterpriseCustomer } from "../customer";
import { EnterpriseVehicle, Vehicle } from "../vehicle";
import { MakeCustomerVehicleFactory } from "./Customer-Vehicle-Factory";

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
