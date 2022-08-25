import { RemoteControl } from "./Remote-Control";

export class RemoteControlWithVolume extends RemoteControl {
  togglePower(): void {
    this.device.power = !this.device.power;
    console.log(`${this.device.name} power status: ${this.device.power}`);
  }

  volumeUp(): void {
    const volume = this.device.volume;
    this.device.volume += 1;
    console.log(`${this.device.volume}`);
  }

  volumeDown(): void {
    this.device.volume -= 1;
    console.log(`${this.device.volume}`);
  }
}
