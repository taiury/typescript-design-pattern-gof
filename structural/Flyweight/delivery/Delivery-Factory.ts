import { DeliveryFlyweight } from "./Delivery-Flyweight";
import { DeliveryLocation } from "./Delivery-location";
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from "./Delivery-Types";

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, "").toLocaleLowerCase())
      .join("_");
  }

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getlocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
