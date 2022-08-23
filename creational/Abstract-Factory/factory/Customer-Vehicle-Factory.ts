import { Customer } from "../customer";
import { Vehicle } from "../vehicle";

export interface MakeCustomerVehicleFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
