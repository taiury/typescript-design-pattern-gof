import { Car, Vehicle } from "../vehicle";
import { VehicleFactory } from "./Vehicle-Factory";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
