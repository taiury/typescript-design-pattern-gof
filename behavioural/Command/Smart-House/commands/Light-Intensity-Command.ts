import { SmartHouseLight } from "../Smart-House-Light";
import { SmartHauseCommand } from "./Smart-House-Command";

export class LightIntensityCommand implements SmartHauseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }
}
