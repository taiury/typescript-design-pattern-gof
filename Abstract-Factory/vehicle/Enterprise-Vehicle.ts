import { Customer } from "../customer";
import { Vehicle } from "./Vehicle";

export class EnterpriseVehicle implements Vehicle {
  constructor(public name: string, private readonly customerName: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customerName.name} (Enterprise Vehicle)`
    );
  }
}
