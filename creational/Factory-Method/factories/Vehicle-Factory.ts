import { Vehicle } from "../vehicle";

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle; // Factory Method

  pickUp(customerName: string, vehiclaName: string): Vehicle {
    const car = this.getVehicle(vehiclaName);
    car.pickUp(customerName);
    return car;
  }
}
