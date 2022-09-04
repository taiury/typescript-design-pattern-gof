import { SmartHauseCommand } from "./Smart-House-Command";
import { SmartHouseLight } from "./Smart-House-Light";

export class LightPowerCommand implements SmartHauseCommand {
  constructor(private readonly Light: SmartHouseLight) {}

  execute(): void {
    this.Light.on();
  }

  undo(): void {
    this.Light.off();
  }
}
