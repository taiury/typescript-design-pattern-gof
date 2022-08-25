export interface DeviceImplementation {
  get name(): string;
  get power(): boolean;
  get volume(): number;
  set power(powerStatus: boolean);
  set volume(volume: number);
}
