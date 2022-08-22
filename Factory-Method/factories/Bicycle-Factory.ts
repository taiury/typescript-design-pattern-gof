import { Bicycle, Vehicle } from "../vehicle";
import { VehicleFactory } from "./Vehicle-Factory";

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
