import { DeviceImplementation } from "./Device-Implementation";

export class Tv implements DeviceImplementation {
  private _volume: number = 10;
  private _power: boolean = false;
  private _name: string = "TV";

  get name(): string {
    return this._name;
  }

  set power(powerStatus: boolean) {
    this._power = powerStatus;
  }

  get power(): boolean {
    return this._power;
  }

  set volume(volume: number) {
    if (this._volume < 0) return;
    if (this._volume > 100) return;

    this._volume = volume;
  }

  get volume(): number {
    return this._volume;
  }
}
