import { Customer, IndividualCustomer } from "../customer";
import { IndividualVehicle, Vehicle } from "../vehicle";
import { MakeCustomerVehicleFactory } from "./Customer-Vehicle-Factory";

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
