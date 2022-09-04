import { SmartHouseLight } from "../Smart-House-Light";
import { SmartHauseCommand } from "./Smart-House-Command";

export class LightPowerCommand implements SmartHauseCommand {
  constructor(private readonly Light: SmartHouseLight) {}

  execute(): void {
    this.Light.on();
  }

  undo(): void {
    this.Light.off();
  }
}
