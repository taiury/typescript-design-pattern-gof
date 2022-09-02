import { DeliveryFlyweight } from "./Delivery-Flyweight";
import { DeliveryLocationData } from "./Delivery-Types";

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}
  deliver(name: string, number: string): void {
    console.log("Entrega para %s", name);
    console.log("Em", this.intrinsicState.street, this.intrinsicState.city);
    console.log("Número", number);
    console.log("###");
  }
}
