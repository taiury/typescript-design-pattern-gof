import { DeviceImplementation } from "./Device-Implementation";

export class Radio implements DeviceImplementation {
  private _volume: number = 10;
  private _power: boolean = false;
  private _name: string = "Radio";

  get name(): string {
    return this._name;
  }

  get power(): boolean {
    return this._power;
  }

  get volume(): number {
    return this._volume;
  }

  set volume(volume: number) {
    if (this._volume < 0) return;
    if (this._volume > 100) return;

    this._volume = volume;
  }

  set power(powerStatus: boolean) {
    this._power = powerStatus;
  }
}
