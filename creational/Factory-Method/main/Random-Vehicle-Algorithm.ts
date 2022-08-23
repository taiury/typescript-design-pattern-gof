import { BicycleFactory, CarFactory } from "../factories";
import { randNum } from "../utils/random-numbers";
import { Vehicle } from "../vehicle";

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Celta Preto");
  const bicycle = bicycleFactory.getVehicle("Mornark");

  const vehicles = [car1, car2, bicycle];
  return vehicles[randNum(vehicles.length)];
}
